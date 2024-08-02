import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JL Distribuciones',
  description: 'Empresa JL Distribuciones',
  keywords: ['JL distribuciones'],
  icons: {
    icon: '/public/JL.webp',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    SitemapBuilder: 'https://jldistribuciones.com.ar/sitemap.xml',
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'JL Distribuciones',
    description: 'Empresa JL Distribuciones',
    type: 'website',
    url: 'https://jldistribuciones.com.ar/',
    images: [
      {
        url: 'https://jldistribuciones.com.ar/JL.webp',
        width: 800,
        height: 600,
        alt: 'Logo de JL Distribuciones',
      },
    ],
    site_name: 'JL Distribuciones',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords.join(', ')} />
        <link rel='icon' href={metadata.icons.icon} />
        <meta name='robots' content='index, follow, noarchive' />
        <meta name='googlebot' content='index, follow' />
        <meta
          name='google-site-verification'
          content='BeXvKZtQuvr_qo-GhNMinOa4qCTryELEMmTfLWZa7rY'
        />
        <link rel='preload' href='/public/img-background1.webp' as='image' />
      </Head>
      <body>
        {children}
        <meta
          name='google-site-verification'
          content='BeXvKZtQuvr_qo-GhNMinOa4qCTryELEMmTfLWZa7rY'
        />
      </body>
    </html>
  )
}
