import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'
import '../../styles/scrollbar.css'
import { Button } from 'antd'
import Link from 'next/link'
import { fontPlayFair } from '../../fonts/fonts'

export default function NotFound() {
  return (
    <div className='container-fluid fondo-notfound'>
      <div className='text-center'>
        <h2 className='text-center mt-0'>La página buscada no existe..</h2>
      </div>
      <div>
        <Link href='/'>
          <Button className={`${fontPlayFair.className} btn-link`}>
            IR AL INICIO
          </Button>
        </Link>
      </div>
    </div>
  )
}
