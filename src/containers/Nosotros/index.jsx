import NavbarComponent from '@/Components/Navbar'
import Nosotros from '@/Components/Nosotros'
import React from 'react'
import { Container } from 'react-bootstrap'

const NosotrosContainer = () => {
  return (
    <Container fluid className='fondo-nosotros'>
      <NavbarComponent />
      <Nosotros />
    </Container>
  )
}

export default NosotrosContainer
