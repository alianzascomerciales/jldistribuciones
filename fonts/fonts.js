import { Noto_Sans_TC } from 'next/font/google'
import { Playfair } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'

const fontNotoSans = Noto_Sans_TC({
  weight: ['400', '500', '800'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})
const fontPlayFair = Playfair({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})

const fontBebasNeue = Bebas_Neue({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})

export { fontNotoSans, fontPlayFair, fontBebasNeue }
