import Backdrop from '@/Components/Home/Backdrop'
import NavbarComponent from '@/Components/Navbar'
import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid className='fondo-backdrop'>
      <NavbarComponent />
      <Backdrop />
    </Container>
  )
}

export default Home
