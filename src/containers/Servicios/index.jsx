import NavbarComponent from '@/Components/Navbar'
import Servicios from '@/Components/Servicios'
import React from 'react'
import { Container } from 'react-bootstrap'

const ServiciosContainer = () => {
  return (
    <Container fluid className='fondo-servicios'>
      <NavbarComponent />
      <Servicios />
    </Container>
  )
}

export default ServiciosContainer
