import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import YangiHujjatW from './yangiHujjatW'

const YangiHujjat = () => {
    return (
        <All>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <YangiHujjatW>
                
                <h1 className='text-center'>yangi hujjat</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <form>
                                    <label htmlFor="ism" className='mt-3 mb-1'>Ism</label>
                                    <input type="text" className='form-control' placeholder="Ismoil" id="ism" />

                                    <label htmlFor="familiya" className='mt-3 mb-1'>Familiya</label>
                                    <input type="text" className='form-control' placeholder="Bahodirov" id="familiya" />
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <form>
                                <label htmlFor="passportid" className='mt-3 mb-1'>Passport ID</label>
                                <input type="text" className='form-control' id="passportid" />

                                <label htmlFor="file" className='mt-3 mb-1'>Hujjat yuklash</label>
                                <input type="file" className='form-control' id="file" />


                            </form>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary mt-3'>Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </YangiHujjatW>
        </All>
    )
}

export default YangiHujjat
