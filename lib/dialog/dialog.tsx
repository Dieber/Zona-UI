import React, { Fragment } from 'react'
// import classes from '../helpers/classes'
import "./dialog.styl"
// import Icon from '../icon/icon'
// import IconLoader from '../iconfont_loder/iconfont_loader'
import ReactDOM from 'react-dom';


interface DialogProps {
  title?: string
  onConfirm?: () => void
  onCancel?: () => void
}

// const defaultProps:ButtonProps = {

// }


const defaultContent = () => {
  return (
    <div className="oui-dialog-default-content">
      这是默认的内容
    </div>
  )
}

const DialogDom: React.FunctionComponent<DialogProps> = (props) => {
  const { onConfirm, onCancel } = props


  return (
    <Fragment>
      {/* <IconLoader iconUrl='//at.alicdn.com/t/font_1210156_onju58yuuls.js'></IconLoader>
      <IconLoader iconUrl='//at.alicdn.com/t/font_1277302_3478stw4cy9.js'></IconLoader> */}
      <div className="oui-dialog-mask"></div>
      <div className="oui-dialog">
        <div className="oui-dialog-header">
          {props.title || '提示'}
        </div>
        <div className="oui-dialog-main">
          {props.children || defaultContent()}
          {/* <Icon prefix="nazo" name="pen"></Icon>
          <Icon prefix="nazo" name="pen"></Icon>
          <Icon name="EURO"></Icon> */}
        </div>
        <div className="oui-dialog-footer">
          <button onClick={onConfirm}>确定</button>
          <button onClick={onCancel}>取消</button>

        </div>
      </div>
    </Fragment>
  )
}

// const show = ():void => {
//   ReactDOM.render()
// }

const show = function () {
  const div = document.createElement('div');
  document.body.append(div);
  return new Promise((resolve, reject) => {
    const confirm = () => {
      close(div)
      resolve()
    }
    const cancel = () => {
      close(div)
      reject()
    }
    // ReactDOM.render(<DialogDom />, document.querySelector)
    ReactDOM.render(React.cloneElement(
      <DialogDom onConfirm={confirm} onCancel={cancel}
    />), div);
  }) 
}




const close = function (div: HTMLDivElement) {
  div.remove()
}


const Dialog = {
  show,
}

export default Dialog