import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import Xodimlar from './xodimlarW'
import Dashboard2 from '../../components/dashboard2'


const Hujjatlar = () => {
    return (
        <Dashboard2>
            <Xodimlar>
                <Head>
                    <title>Dream</title>
                    <meta name="description" content="dream education haqida toliq malumot" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className='mt-5'>Xodimlar haqida ma'lumotlar</h1>
            </Xodimlar>
        </Dashboard2>
    )
}

export default Hujjatlar
