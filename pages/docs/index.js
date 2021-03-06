import React, { useEffect, useState } from 'react'
import Dashboard2 from '../../components/dashboard2'
import Link from 'next/link'
import DocsWrapper from './docsW'
import Head from 'next/head'
import Data from '../table/data'
// import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { useRouter } from 'next/router';
import Axios from "axios"

const Docs = () => {
    const owners = [

        {
            name: "Ibrohim Akromov",
            address: "Toshkent shahar Yashnobod tumani Ohangrabo-54 +998946910781",
            id: "1",
        },
        {
            name: "Izzat Toychiyev",
            address: "Toshkent shahar Yashnobod tumani Tosh kochasi-78 +998978888778",
            id: "2",
        },
        {
            name: "Asad fbjfj",
            address: "Qashqadaryo viloyati Qamashi tumani Terak-90 +998997777700",
            id: "3",
        },
        {
            name: "Doniyor ffef",
            address: "Samarqand viloyati Registon-554 +99890999999",
            id: "4",
        },
        {
            name: "Anvar Toychidfyev",
            address: "Andijon viloyati Asaka-97 +998998576423",
            id: "5",
        },
        {
            name: "Kamol fsf",
            address: "Surxondaryo viloyti chegara-11 +998941122211",
            id: "6",
        }

    ]
    const router = useRouter();
    const [rows, setRows] = React.useState([])
  
    let fullData = [];
    const [state, setstate] = useState(1);
    const [post, setPost] = useState([]);
  
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
  
      console.log(rows);

      rows.map(value => {
        console.log("salom");
        if (value.id == state) fullData = value;
    })

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
                <div className="container docs2">
                    <img src={fullData.Passport} alt="hujjat rasmi" />
                </div>
            </DocsWrapper>
        </Dashboard2>
    )
}

export default Docs;
