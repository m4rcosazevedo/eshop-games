import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children?: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Container

const Box = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 560px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1120px;
  }
`
