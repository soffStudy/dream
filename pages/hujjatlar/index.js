import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import HujjatlarW from '../../styleW/hujjatlar'

const Hujjatlar = () => {
    return (
        <All>
            <HujjatlarW>
                <Head>
                    <title>Dream</title>
                    <meta name="description" content="dream education haqida toliq malumot" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Hujjatlar</h1>

            </HujjatlarW>
        </All>
    )
}

export default Hujjatlar
