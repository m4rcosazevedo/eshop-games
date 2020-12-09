import React from 'react'
import styled from 'styled-components'
import { Container } from '@/presentation/components'

const Footer: React.FC = () => {
  return (
    <Box>
      <Container>
        Marcos Azevedo 2020
      </Container>
    </Box>
  )
}

export default Footer

const Box = styled.div`
  background: #313131;
  color: #ffffff;
  padding: 30px 0;
`
