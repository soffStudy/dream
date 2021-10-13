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
                        <div className="col-6">
                            
                                <Link href='docs'>
                                <div className='bg-warning'>
                                    passport
                                </div>
                                </Link>
                        </div>

                        <div className="col-6">
                        <Link href='#'>
                                <div className='bg-warning'>
                                    passport
                                </div>
                                </Link>
                        </div>
                    </div>
                </div>
              
            </AsosiyW>
        </All>
    )
}

export default Passport
