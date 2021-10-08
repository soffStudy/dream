import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import AsosiyW from '../../styleW/asosiyW'
import Link from 'next/link'



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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam assumenda dolore quod saepe sequi minus dolores dolorum nemo, amet iste ipsa. Eius atque vero cupiditate id, ad voluptatum accusamus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam assumenda dolore quod saepe sequi minus dolores dolorum nemo, amet iste ipsa. Eius atque vero cupiditate id, ad voluptatum accusamus?</p>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="#">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Jami talabalr soni</p>
                                        <p>270</p>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="#">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Bajarilish jarayonidagi talabalr soni</p>
                                        <p>250</p>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="#">
                                <a>
                                    <div className='asosiyCardlar'>
                                        <p>Tugallangan talablar soni</p>
                                        <p>20</p>
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

export default Asosiy
