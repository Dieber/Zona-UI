import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.styl';
import Dialog from './dialog/dialog';

// import IconLoader from './iconfont_loder/iconfont_loader'
// import Icon from './icon/icon'
// import 'http://at.alicdn.com/t/font_1277302_3478stw4cy9.js'

// const onConfirm = () => {
//     console.log(123)
// }

// Dialog.show().then((res) => {
//     console.log(res)
// }, (rej) => {

// })


async function show() {
    try {
        await Dialog.show()
        console.log(456)
    } catch (e) {
        console.log(123)
    }
}


ReactDOM.render(
    <Fragment>
        <button onClick={show}>123</button>
    {/* <Dialog onConfirm={onConfirm}></Dialog> */}
    {/* <IconLoader iconUrl="//at.alicdn.com/t/font_1277302_3478stw4cy9.js"></IconLoader>
    <Icon name="EURO"/> */}
</Fragment>
,document.querySelector('#root'))

// export {default as Icon} from './icon/icon'

// export {default as IconLoader} from './iconfont_loder/iconfont_loader'
