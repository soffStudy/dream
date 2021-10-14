import React from 'react'
import Head from 'next/head'
import All from '../../components/all'
import AsosiyW from './asosiyW'
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";
import { BiCalendarPlus, BiCalendarMinus, BiCalendarCheck, BiCalendarEdit } from "react-icons/bi";
import { useRouter } from 'next/router'


const Asosiy = () => {
    const router = useRouter();

    const handleRowClick = () => {
        router.push(
            { pathname: '/table', query: { types: 'tolagan' }}
        );
       console.log(router.query.keyword);
      
    }

    const handleRowClick2 = () => {
        router.push(
            { pathname: '/table', query: { types: 'tolamagan' }}
        );
       console.log(router.query.keyword);
      
    }

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
                        <Link href="table">
                            <div className='asosiyCardlar'>
                                <div className=''>
                                    <BiCalendarEdit className='fs-1'/>
                                    <p className='mt-2 h1 fw-bold'>270</p>
                                </div>
                                <p>Barcha talabalar</p>   
                            </div>
                            </Link>  
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='asosiyCardlar' onClick={()=>handleRowClick2()}>
                                <div className=''>
                                    <BiCalendarEdit className='fs-1'/>
                                    <p className='mt-2 h1 fw-bold'>171</p>
                                </div>
                                <p>hali tolanmagan</p>     
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div  className='asosiyCardlar'  onClick={()=>handleRowClick()} >
                                <div className=''>
                                    <BiCalendarEdit className='fs-1'/>
                                    <p className='mt-2 h1 fw-bold'>99</p>
                                    <p>To'lov tugatilgan talabalar</p>     
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
