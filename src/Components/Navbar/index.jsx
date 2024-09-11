'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import './navbar.css'
import { fontBebasNeue } from '../../../fonts/fonts'

const NavbarComponent = () => {
  const [expandir, setExpandir] = useState(false)
  const handleToggle = () => {
    setExpandir(!expandir)
  }
  const handleSelect = () => {
    setExpandir(false)
  }

  return (
    <Navbar expand='lg' expanded={expandir} className='cont-navbar'>
      <Container fluiud className='py-2 px-0 justify-content-end'>
        <button
          className='navbar-toggler bg-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={expandir ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={handleToggle}
        >
          <span className='navbar-toggler-icon '></span>
        </button>
        <div
          className={` collapse navbar-collapse justify-content-end ${
            expandir ? 'show' : ''
          }`}
          id='navbarNav'
        >
          <ul className=' navbar-nav'>
            <li className='nav-item text-start'>
              <Link
                className='nav-link'
                aria-current='page'
                href='/'
                onClick={handleSelect}
              >
                <FaHome
                  className='icon-home-navbar me-2 text-white'
                  style={{ textShadow: '3px 3px 2px rgba(0, 0, 0, 0.849)' }}
                />
              </Link>
            </li>
            <li className='nav-item text-start'>
              <Link
                className='nav-link'
                aria-current='page'
                href='/nosotros'
                onClick={handleSelect}
              >
                <p className={`${fontBebasNeue.className} my-0 text-white`}>
                  NOSOTROS
                </p>
              </Link>
            </li>
            <li className='nav-item text-start'>
              <Link
                className='nav-link'
                aria-current='page'
                href='/servicios'
                onClick={handleSelect}
              >
                <p className={`${fontBebasNeue.className} my-0 text-white`}>
                  SERVICIOS
                </p>
              </Link>
            </li>
            <li className='nav-item text-start'>
              <Link
                className='nav-link'
                aria-current='page'
                href='/contacto'
                onClick={handleSelect}
              >
                <p className={`${fontBebasNeue.className} my-0 text-white`}>
                  CONTACTO
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
