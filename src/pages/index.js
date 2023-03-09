import Head from 'next/head'
import Title from '@/components/Title'
import Sites from '@/components/Sites'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import About from '@/components/About'


export default function Home() {
  return (
    <>
      <Head>
        <title>Soul Sites</title>
        <meta name="description" content="Soul Never Dies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Nav/>
      <Title/>
      <Sites/>
      <About/>
      <Footer/>
    </>
  )
}
