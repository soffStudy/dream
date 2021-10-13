import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import YangiHujjatW from './yangiHujjatW'

const YangiHujjat = () => {
    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <YangiHujjatW>
                
                <h1 className='text-center'>yangi hujjat</h1>
            </YangiHujjatW>
        </All>
    )
}

export default YangiHujjat
