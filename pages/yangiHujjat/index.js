import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import YangiHujjatW from '../../styleW/yangiHujjatW'

const YangiHujjat = () => {
    return (
        <All>
            <YangiHujjatW>
                <Head>
                    <title>Dream</title>
                    <meta name="description" content="dream education haqida toliq malumot" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>yangi hujjat</h1>
            </YangiHujjatW>
        </All>
    )
}

export default YangiHujjat
