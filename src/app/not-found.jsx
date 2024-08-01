import { Button } from 'antd'
import Link from 'next/link'
import { fontPlayFair } from '../../fonts/fonts'
import './global.css'
import '../../styles/scrollbar.css'
export default function NotFound() {
  return (
    <div className='fondo-notfound'>
      <div className='text-center'>
        <h4>La página buscada no existe..</h4>
        <Link href='https://jldistribuciones.com.ar'>
          <Button className={`${fontPlayFair.className} btn-link`}>
            IR AL INICIO
          </Button>
        </Link>
      </div>
    </div>
  )
}
