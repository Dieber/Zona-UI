import React from 'react'
import classes from '../helpers/classes'
import './icon.styl'
interface Iconprops {
  name ?: string,
  className ?: string,
  prefix ?: string
}

// const defaultProps:Iconprops = {
//   name: '',
//   className: ''
// }


const Icon: React.FunctionComponent<Iconprops> = ({className, name, prefix, ...restProps}) => {   
  return (
    <svg className={classes(['icon', className])} aria-hidden="true">
      <use xlinkHref={`#${prefix ? prefix : 'icon-'}${name}`}></use>
    </svg>
  )
}

export default Icon