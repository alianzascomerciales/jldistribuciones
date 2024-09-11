import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'
import '../../styles/scrollbar.css'
import Image from 'next/image'
// import PaginaConstruccionContainer from '@/containers/PaginaConstruccion'
import Home from '@/containers/Home'

const HomePage = () => {
  return (
    <div>
      <Home />
      <div className='py-5'></div>
    </div>
    // <PaginaConstruccionContainer titulo='Proximamente' />
  )
}

export default HomePage
