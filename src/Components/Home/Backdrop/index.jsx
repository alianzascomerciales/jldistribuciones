import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { fontBebasNeue } from '../../../../fonts/fonts'
import './backdrop.css'
import Link from 'next/link'
import Image from 'next/image'

const Backdrop = () => {
  return (
    <Row className='px-0 py-0 justify-content-between img-bg-home'>
      <Col xs={12} md={7} lg={6} className='bg-col-1 cont-size px-5'>
        <Row className='pt-5'>
          <Col xs={12}>
            <div className='img-logo-backdrop text-center mt-5'>
              <Image
                width={431}
                height={233}
                quality={100} // Ajusta la calidad según sea necesario
                sizes='(max-width: 576px) 100vw, 50vw'
                src='/logo-backdrop.webp'
                srcSet='/logo-backdrop-min.webp 600w, /logo-backdrop.webp 1000w'
                alt='JL Distribuciones'
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className='cont-title mt-4 '>
              <div>
                <h1
                  className={` ${fontBebasNeue.className} title mb-0 text-center`}
                >
                  SU SOCIO ESTRATÉGICO EN LOGÍSTICA INDUSTRIAL
                </h1>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className='cont-bajada '>
              <p className='bajada'>
                Con 25 años de experiencia, en JL DISTRIBUCIONES ofrecemos
                soluciones logísticas innovadoras y adaptables. Especializados
                en logística industrial punta a punta, receptoría en almacenes,
                cargas parciales almacenes con custodia, estamos listos para
                optimizar tus operaciones con eficiencia y seguridad.
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <div className='cont-btn text-center pt-4'>
              <Link
                href='/contacto'
                className={`${fontBebasNeue.className} btn-backdrop py-2 px-3 me-4`}
              >
                CONTÁCTENOS
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      {/* <Col xs={12} md={6} className='px-0'>
        <div className='img-bg-home cont-size'>.</div>
      </Col> */}
    </Row>
  )
}

export default Backdrop
