import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAB</title>
        <meta name="description" content="Friday Afternoon Boardgames!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-dark-200 " + styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
