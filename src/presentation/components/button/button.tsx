import React, { ReactNode } from 'react'
import { Button as ButtonStyle } from './button-styles'

interface P {
  type: 'button' | 'submit'
  children?: ReactNode
}

const Button: React.FC<P> = (props: P) => {
  return (
    <ButtonStyle type={props.type}>
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      {props.children}
    </ButtonStyle>
  )
}

export default Button
