import Contacto from '@/Components/Contacto'
import NavbarComponent from '@/Components/Navbar'
import React from 'react'
import { Container } from 'react-bootstrap'

const ContactoContainer = () => {
  return (
    <Container fluid className='fondo-contacto'>
      <NavbarComponent />
      <Contacto/>
    </Container>
  )
}

export default ContactoContainer
