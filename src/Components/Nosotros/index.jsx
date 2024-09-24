import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './nosotros.css'

const Nosotros = () => {
  return (
    <Row className='px-0 py-0 justify-content-between cont-contacto'>
      <Col xs={12} className='px-0'>
        <Image
          width={431}
          height={233}
          src='/img-backdrop-min.webp'
          alt='Camiones de JL'
          className='img-backdrop-contacto'
          // fill
          style={{ objectFit: 'cover' }}
        />
      </Col>
    </Row>
  )
}

export default Nosotros
