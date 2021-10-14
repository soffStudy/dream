import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import Link from 'next/link'
import PasswordWrapper from './passportW'

const Passport = () => {

    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PasswordWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Link href='docs'>
                                <div className='passport'>
                                    <p>
                                        passport
                                    </p>
                                    <p className='dreamEdu'>
                                        Dream Edu
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link href='#'>
                                <div className=' passport'>
                                    <p>passport</p>
                                    <p className='dreamEdu'>Dream Edu</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </PasswordWrapper>
        </All>
    )
}

export default Passport;
