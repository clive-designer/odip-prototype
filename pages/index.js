import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>ODIP prototype</h1>
      <h2>Start page.</h2>
    </div>
  )
}
