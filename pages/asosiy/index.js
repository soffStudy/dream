import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import AsosiyW from './asosiyW'
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
import { BiCalendarPlus, BiCalendarMinus, BiCalendarCheck, BiCalendarEdit } from "react-icons/bi";


const Asosiy = () => {
    return (
        <All>
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
                            <div className='asosiyCardlar'>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-3'><BiCalendarEdit /></p>
                                    <p className='mt-2'>270</p>
                                </div>
                                <p>Bajaraib bo'lingan talabalar soni</p>
                                <div className="d-flex justify-content-end">
                                    <Link href="table">
                                        <button className='btn btn-primary fs-5'>
                                            <HiArrowSmRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='asosiyCardlar'>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-3'><BiCalendarCheck /></p>
                                    <p className='mt-2'>250</p>
                                </div>
                                <p>Bajarilish jarayonidagi talabalr soni</p>
                                <div className="d-flex justify-content-end">
                                    <Link href="bajarilishJarayon">
                                        <button className='btn btn-primary fs-5'>
                                            <HiArrowSmRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='asosiyCardlar'>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-3'><BiCalendarMinus /></p>
                                    <p className='mt-2'>20</p>
                                </div>
                                <p>Bajaraib bo'lingan talabalar soni</p>
                                <div className="d-flex justify-content-end">
                                    <Link href="yuklamaganTalabalar">
                                        <button className='btn btn-primary fs-5'>
                                            <HiArrowSmRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </AsosiyW>
        </All>
    )
}

export default Asosiy;
