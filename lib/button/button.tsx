import React, { ButtonHTMLAttributes } from 'react'
// import classes from '../helpers/classes'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

// const defaultProps:ButtonProps = {

// }


const Button: React.FunctionComponent<ButtonProps> = ({}) => { 
  return (
    <button>123</button>
  )
}

export default Button