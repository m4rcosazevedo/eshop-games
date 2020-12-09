import React from 'react'
import { Box, List, Nav } from './styles'
import { Container } from '@/presentation/components'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <Box>
      <Container>
        <Nav>
          <img src={Logo} alt=""/>
          <List>
            <Link to="/">Home</Link>
            <Link to="/">All games</Link>
            <Link to="/">Favorites</Link>
            <Link to="/">Contact</Link>
          </List>
        </Nav>
      </Container>
    </Box>
  )
}

export default Navbar
