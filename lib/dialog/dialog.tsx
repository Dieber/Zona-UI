import React, { Fragment, ReactElement } from 'react'
// import classes from '../helpers/classes'
import "./dialog.styl"
// import Icon from '../icon/icon'
// import IconLoader from '../iconfont_loder/iconfont_loader'
import ReactDOM from 'react-dom';


interface DialogProps {
  title?: string
  width?: number
  onConfirm?: () => void
  onCancel?: () => void
}

interface showProps {
  title?: string,
  content?: HTMLDivElement | ReactElement | string
  width?: number
}

const defaultContent = () => {
  return (
    <div className="oui-dialog-default-content">
      aklsdjflksdaf aklsdjflksdaf aklsdjflksdaf aklsdjflksdaf aklsdjflksdaf aklsdjflksdaf 
    </div>
  )
}

const DialogDom: React.FunctionComponent<DialogProps> = (props) => {
  const { onConfirm, onCancel, title, children, width } = props
  
  return (
    <Fragment>
      {/* <IconLoader iconUrl='//at.alicdn.com/t/font_1210156_onju58yuuls.js'></IconLoader>
      <IconLoader iconUrl='//at.alicdn.com/t/font_1277302_3478stw4cy9.js'></IconLoader> */}
      <div className="oui-dialog-mask"></div>
      <div className="oui-dialog" style={{width: width ? width + 'px': '400px'}}>
        <div className="oui-dialog-header">
          {title || '提示'}
        </div>
        <div className="oui-dialog-main">
          {children || defaultContent()}
        </div>
        <div className="oui-dialog-footer">
          <button onClick={onConfirm}>确定</button>
          <button onClick={onCancel}>取消</button>
        </div>
      </div>
    </Fragment>
  )
}

const show = function (options: showProps) {
  let {title, content, width} = options
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
    ReactDOM.render(React.cloneElement(
      <DialogDom onConfirm={confirm} onCancel={cancel} title={title} width={width}
    >{content}</DialogDom>), div);
  }) 
}

const close = function (div: HTMLDivElement) {
  div.remove()
}


const Dialog = {
  show,
}

export default Dialog