import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import HujjatlarW from './hujjatlar'
import Table from './../table'

const Hujjatlar = () => {
    return (
        <All>
             <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HujjatlarW>
                <div className="container"> 
                    <h1>Hujjatlar</h1>  
                    <Table/>
                </div>
            </HujjatlarW>
        </All>
    )
}

export default Hujjatlar
