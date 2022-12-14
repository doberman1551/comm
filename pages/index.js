import Head from 'next/head'
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Cta from '../components/Cta'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import ProductInfo from '../components/ProductInfo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div>
      <Nav/>
      <Hero/>
      <ProductInfo/>
      <Benefits/>
      <Cta/>
     </div>
     </div>
  )
}
