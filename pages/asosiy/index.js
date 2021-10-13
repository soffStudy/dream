import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import AsosiyW from './asosiyW'
import Link from 'next/link'

const Asosiy = () => {
    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AsosiyW>
                <Head>
                    <title>Dream</title>
                    <meta name="description" content="dream education haqida toliq malumot" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className='text-center'>Asosiy</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="jamiTalabalar">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Jami talabalr soni</p>
                                        
                                        <div className="content">
                                                <p>270</p>
                                                <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="bajarilishJarayon">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Bajarilish jarayonidagi talabalr soni</p>
                                        
                                        <div className="content">
                                            <p>250</p>
                                            <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="yuklamaganTalabalar">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Tugallangan talablar soni</p>
                                    
                                        <div className="content">
                                            <p>20</p>
                                            <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AsosiyW>
        </All>
    )
}

export default Asosiy;
