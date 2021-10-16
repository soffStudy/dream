import React, { useEffect, useState } from 'react'
import Dashboard2 from '../../components/dashboard2'
import DocsWrapper from '../docs/docsW'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Data from '../table/data'
import { AiFillPrinter } from "react-icons/ai";


const Docs = () => {

    const router = useRouter();
    let fullData = {};
    const [state, setstate] = useState(1);

    useEffect(() => {
        setstate(localStorage && localStorage.getItem("ID"));

    }, []);


    Data.map(value => {
        if (value.id == state) fullData = value;
    });

    const printPageFun = (divName) => {
        var printContents = document.getElementById(divName).innerHTML
        var originalContents = document.body.innerHTML
        document.body.innerHTML = printContents
        window.print()
        document.body.innerHTML = originalContents
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
            <DocsWrapper>
                <div className="d-flex justify-content-end me-3 mb-3" > <button className='btn btn-primary mt-2' onClick={() => printPageFun('print')}> <span className="fs-4" ><AiFillPrinter /></span> Pechat</button></div>
                <div className="container docs2" id='print'>
                    <h1>hujjat N1</h1>
                    <h1>{fullData.id}  : id raqami</h1>
                    <h1>{fullData.name}  : Ismi</h1>
                </div>
            </DocsWrapper>
        </Dashboard2>
    )
}

export default Docs;
