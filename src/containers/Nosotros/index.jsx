import NavbarComponent from '@/Components/Navbar'
import Nosotros from '@/Components/Nosotros'
import NosotrosInfo from '@/Components/Nosotros/NosotrosInfo'
import React from 'react'
import { Container } from 'react-bootstrap'

const NosotrosContainer = () => {
  return (
    <Container fluid className='fondo-nosotros'>
      <NavbarComponent />
      <Nosotros />
      <NosotrosInfo />
    </Container>
  )
}

export default NosotrosContainer
