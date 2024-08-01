import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'
import '../../styles/scrollbar.css'
import Image from 'next/image'
import PaginaConstruccionContainer from '@/containers/PaginaConstruccion'

export default function Home() {
  return <PaginaConstruccionContainer titulo='Proximamente' />
}
