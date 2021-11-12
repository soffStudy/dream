import React, { useEffect, useState } from 'react'
import Dashboard2 from '../../components/dashboard2'
import DocsWrapper from '../docs/docsW'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AiFillPrinter } from "react-icons/ai";
import Axios from "axios"


const Docs = () => {


    const router = useRouter();
    const [newData, setNewData] = React.useState([])
    const [rows, setRows] = React.useState([])

    const [post, setPost] = useState([]);
    const [state, setState] = useState(1);
    const [ism, setIsm] = useState("erkin");



    useEffect(() => {
        Axios.get(`http://localhost:1337/teachers`).then((result) => {
            if (Object.keys(router.query).length != 0) {
                result.data.map((item) => {
                    if (item.statusRealTime == routerr.query.types) {
                        exactData.push(item)
                    }
                })
                setRows(exactData)
            } else {
                setRows(result.data)
            }
            
        }).catch((err) => {
            
        });


        setState(localStorage && localStorage.getItem("ID"));

    }, []);

    let fullData = {};
  



    rows.map(value => {
        if (value.id == state ) fullData = value;
        console.log(state);
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
                    <h1>hujjat N3</h1>
                    <h1>{fullData.ism}  : id raqami</h1>
                    <h1>{fullData.name}  : Ismi</h1>
                    <h1>{fullData.tel}  : Nomer</h1>

                </div>
            </DocsWrapper>
        </Dashboard2>
    )
}

export default Docs;
