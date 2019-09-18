import React from 'react'
import './icon.styl'


interface Iconprops extends React.SVGAttributes<SVGElement> {
  name ?: string,
  className ?: string,
  prefix ?: string
}

const Icon: React.FunctionComponent<Iconprops> = ({className, name, prefix, ...restProps}) => {   
  return (
    <svg className={''} {...restProps} aria-hidden="true">
      <use xlinkHref={`#${prefix ? prefix : 'icon-'}${name}`}></use>
    </svg>
  )
}


export default Icon