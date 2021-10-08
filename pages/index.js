import Head from 'next/head'
// import Asosiy from './asosiy'
import Login from './../pages/login/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dream</title>
        <meta name="description" content="dream education haqida toliq malumot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
        {/* <Asosiy></Asosiy> */}
      </main>
    </div>
  )
}
