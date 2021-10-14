import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import All from '../../components/all'
import AsosiyW from '../asosiy/asosiyW'
import Link from 'next/link'

const Passport = () => {



    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AsosiyW>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href='docs'>
                                <a>
                                    <div className='asosiyCardlar'>
                                        passport
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href='docs'>
                                <a>
                                    <div className='asosiyCardlar'>
                                        Hujjat 1
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href='docs'>
                                <a>
                                    <div className='asosiyCardlar'>
                                        Hujjat 2
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </AsosiyW>
        </All>
    )
}

export default Passport
