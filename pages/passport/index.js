import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Dashboard2 from '../../components/dashboard2'
import Link from 'next/link'
import PasswordWrapper from './passportW'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AiFillPicture, AiOutlineDownload } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import Data from './../table/data'
import { useRouter } from 'next/router';
import Axios from "axios"



const Passport = () => {


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
                                    Passport
                                </p>
                                <div className=' p-2'>
                                    <Link href='docs'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                    <a href={fullData.passport} download><button className='btn btn-primary m-1'><AiOutlineDownload className='fs-4 mb-1' /> Yuklash</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    3x4 rasm
                                </p>
                                <div className=' p-2'>
                                    <Link href='rasm34'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>
                                    <a href={fullData.image} download><button className='btn btn-primary m-1'><AiOutlineDownload className='fs-4 mb-1' /> Yuklash</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    Diplom
                                </p>
                                <div className=' p-2'>
                                    <Link href='hujjat2'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    O'qishga kirganlik haqidagi hujjat
                                </p>
                                <div className=' p-2'>
                                    <Link href='reading'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                    Kontrakt tolovi
                                </p>
                                <div className=' p-2'>
                                    <Link href='payments'>
                                        <button className='btn btn-light m-1'><AiFillPicture className='fs-4 mb-1' />  Ko'rish</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                            <div className='passport'>
                                <HiOutlineDocumentDuplicate className='fs-2' />
                                <p>
                                   P.Tarjima
                                </p>
                                <div className=' p-2'>
                                    <Link href='translation'>
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

export default Passport;
