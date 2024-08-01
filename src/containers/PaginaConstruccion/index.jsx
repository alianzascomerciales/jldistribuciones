'use client'

import { Col, Container, Row } from 'react-bootstrap'
import { Spin } from 'antd'
import { fontBebasNeue, fontNotoSans } from '../../../fonts/fonts'
import Image from 'next/image'

const PaginaConstruccionContainer = ({ titulo }) => {
  return (
    <Container fluid className='fondo-home'>
      <Row className='h-100 d-flex align-items-center'>
        <Col xs={12} className='text-center p-container'>
          <div>
            <Image
              className='img-icono'
              src='/JL-icon.webp'
              alt='Servicios e insumos para la industria minera'
              priority
              height='160'
              width='160'
            />
          </div>
          <div>
            <h1 className={`${fontBebasNeue.className} t-pag-construccion`}>
              {titulo}
            </h1>
          </div>
          <div className='text-center'>
            <hr className='linea-horizontal mt-1' />
          </div>
          <div>
            <h5
              className={`${fontNotoSans.className} pt-4 text-pag-construccion`}
            >
              ¡El sitio estará listo pronto! ¡Trabajamos para brindarte la mejor
              experiencia!
            </h5>
          </div>
        </Col>
        {/* <Col xs={12} className='text-center align-items-center'>
          <div className='mb-5'>
            <h2>Página en proceso</h2>
          </div>
          <div className=''>
            <Spin size='large' fullscreen />
          </div>
          <div>
            <h5>¡El sitio estará listo pronto! ¡Trabajamos para brindarte la mejor experiencia!</h5>
          </div>
        </Col> */}
      </Row>
    </Container>
  )
}

export default PaginaConstruccionContainer
