import Head from 'next/head'
// import Asosiy from './asosiy'
import Login from './../pages/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Dream</title>
        <meta name="description" content="dream education haqida toliq malumot" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Login />
        {/* <Asosiy></Asosiy> */}
      </main>
    </div>
  )
}
