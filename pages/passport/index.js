import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import Link from 'next/link'
import PasswordWrapper from './passportW'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Passport = () => {

    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap" rel="stylesheet"></link>
            </Head>
            <PasswordWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className='passport'>
                                <AccountBoxIcon className='fs-1'/>
                                <p>
                                    Passport
                                </p>
                                <div className='btns w-100 p-2'>
                                    <Link href='docs'>
                                        <button className='btn btn-light me-2'>See</button>
                                    </Link>
                                    
                                    <a href="favicon.ico" download><button className='btn btn-primary ms-2'>download</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <Link href='#'>
                                <div className=' passport'>
                                <AccountBoxIcon className='fs-1'/>
                                    <p>Passport</p>
                                    <div className='btns w-100 p-2'>
                                        <Link href='docs'>
                                            <button className='btn btn-light me-2'>See</button>
                                        </Link>
                                        
                                        <a href="favicon.ico" download><button className='btn btn-primary ms-2'>download</button></a>
                                    </div>
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
