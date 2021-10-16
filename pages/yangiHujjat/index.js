import React from 'react'
import Head from 'next/head'
import Dashboard2 from '../../components/dashboard2'
import YangiHujjatW from './yangiHujjatW'

const YangiHujjat = () => {
    return (
        <Dashboard2>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <YangiHujjatW>

                <h1 className='text-center mt-5'>yangi hujjat</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <form>
                                    <label htmlFor="ism" className='mt-3 mb-1'>Ism</label>
                                    <input type="text" className='form-control' placeholder="Ismoil" id="ism" />

                                    <label htmlFor="familiya" className='mt-3 mb-1'>Familiya</label>
                                    <input type="text" className='form-control' placeholder="Bahodirov" id="familiya" />

                                    <label htmlFor="manzil" className='mt-3 mb-1'>Manzil</label>
                                    <input type="text" className='form-control' placeholder="Toshkent shahar" id="manzil" />

                                    <label htmlFor="nomer" className='mt-3 mb-1'>Raqam</label>
                                    <input type="number" className='form-control' placeholder="998946325632" id="nomer" />

                                    <label htmlFor="davlat" className='mt-3 mb-1'>Topshirgan davlat</label>
                                    <input type="text" className='form-control' placeholder="USA" id="davlat" />


                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <form>
                                <label htmlFor="yonalish" className='mt-3 mb-1'>Topshirgan yo'nalish</label>
                                <input type="text" className='form-control' placeholder="Harvard" id="yonalish" />

                                <div className='d-flex  justify-content-between '>
                                    <div className='w-100 me-3  '>
                                        <label htmlFor="tolov1" className='mt-3 mb-1'>1- To'lov  </label>
                                        <input type="number" className='form-control' placeholder="3200000" id="tolov1" />
                                    </div>

                                    <div className='w-100'>
                                        <label htmlFor="passportid" className='mt-3 mb-1'>1- to'lov qilingan sana</label>
                                        <input type="date" className='form-control' id="passportid" />
                                    </div>
                                </div>


                                <div className='d-flex  justify-content-between '>
                                    <div className='w-100 me-3  '>
                                        <label htmlFor="tolov2" className='mt-3 mb-1'>2- to'lov qilingan sana</label>
                                        <input type="number" className='form-control' placeholder="8900000" id="tolov2" />
                                    </div>

                                    <div className='w-100'>
                                        <label htmlFor="sana2" className='mt-3 mb-1'>Sana 2</label>
                                        <input type="date" className='form-control' id="sana2" />
                                    </div>

                                </div>

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
        </Dashboard2>
    )
}

export default YangiHujjat
