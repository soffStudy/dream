import React from 'react'
import Head from 'next/head'
import Dashboard2 from '../../components/dashboard2'
import Link from 'next/link'
import PasswordWrapper from '../passport/passportW'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AiFillPicture, AiOutlineDownload } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from "axios"





const Cards = () => {

    const router = useRouter();
    const [rows, setRows] = React.useState([])
  
  
      const [post, setPost] = useState([]);
      let fullData = {};
    const [state, setstate] = useState();
  
      useEffect(() => {
          Axios.get(`http://localhost:1337/students`).then((result) => {
            let exactData = []
              if (Object.keys(router.query).length != 0) {
                  result.data.map((item) => {
                    console.log("=> ", item.statusRealTime, router.query.types)
                      if (item.statusRealTime === router.query.types) {
                          exactData.push(item)
                        }
                      })
                  setRows(exactData)
                } else {
                    console.log("oxshadi ")
                    setRows(result.data)
                }
              
          }).catch((err) => {
              
          });
          setstate(localStorage && localStorage.getItem("ID"));
      }, []);
  
      console.log( rows);


      rows.map(value => {
        if (value.id == state) fullData = value;
    });

    const handlechange=()=>{
        router.push(
            { pathname: '/hujjatXodim2' }
        );

    }


    return (
        <Dashboard2>
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
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <AccountBoxIcon className='fs-2' />
                                <p>
                                    Xodim passporti
                                </p>
                                <div className=' p-2'>
                                    <Link href='hujjatXodim'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                    <a href={fullData.xodimpassport} download><button className='btn btn-primary m-1'><AiOutlineDownload className='fs-4 mb-1' /> Yuklash</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    Ish yuritgan talbalar ro'yxati
                                </p>
                                <div className=' p-2'>
                                  
                                    <button className='btn btn-light m-1' onClick={()=>handlechange()} ><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    Hujjat 2
                                </p>
                                <div className=' p-2'>
                                    <Link href='hujjatXodim3'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </PasswordWrapper>
        </Dashboard2>
    )
}

export default Cards;
