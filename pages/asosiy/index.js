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
                <div className="container">
                    <h1 className='text-center'>Asosiy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam assumenda dolore quod saepe sequi minus dolores dolorum nemo, amet iste ipsa. Eius atque vero cupiditate id, ad voluptatum accusamus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam assumenda dolore quod saepe sequi minus dolores dolorum nemo, amet iste ipsa. Eius atque vero cupiditate id, ad voluptatum accusamus?</p>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 colClass">
                                <Link href="#">
                                    <div className='asosiyCardlar colClass'>
                                        <p>Jami talabalr soni</p>
                                        
                                        <div className="content">
                                                <p>270</p>
                                                <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Link href="#">
                                    <div className='asosiyCardlar colClass'>
                                        <p>Bajarilish jarayonidagi talabalr soni</p>
                                        
                                        <div className="content">
                                            <p>250</p>
                                            <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Link href="#">
                                    <div className='asosiyCardlar colClass'>
                                        <p>Tugallangan talablar soni</p>
                                    
                                        <div className="content">
                                            <p>20</p>
                                            <p>lorem ipsum</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AsosiyW>
        </All>
    )
}

export default Asosiy
