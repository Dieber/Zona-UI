import React from 'react'
import classes from '../helpers/classes'

interface Iconprops {
  name ?: string,
  className ?: string
}

// const defaultProps:Iconprops = {
//   name: '',
//   className: ''
// }


const Icon: React.FunctionComponent<Iconprops> = 
  ({className, name, ...restProps}) => {   
  return (
    <svg className={classes(['icon', className])} aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon