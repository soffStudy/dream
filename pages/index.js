import Head from 'next/head'
import Glogin from './../pages/login/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dream</title>
        <meta name="description" content="dream education haqida toliq malumot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       {/* // <h1>salom</h1>// */}
        <Glogin />
      </main>
    </div>
  )
}
