import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />

     
    </div>
  )
}
