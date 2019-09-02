import React, { Fragment } from 'react'
import Icon from './icon'
import IconLoader from '../iconfont_loader/iconfont_loader'


const IconExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <IconLoader iconUrl="//at.alicdn.com/t/font_1277302_3478stw4cy9.js"></IconLoader>
      <Icon name="EURO" />
    </Fragment>
  )
}

export default IconExample