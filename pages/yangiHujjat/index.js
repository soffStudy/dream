import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Dashboard2 from '../../components/dashboard2'
import YangiHujjatW from './yangiHujjatW'
import { useRouter } from 'next/router'
import Axios from "axios"

let studentData = [
    {
            FIO: 'Kapman 2',
            actives: 'Kapman 2',
            address: 'Kapman 2',
            direction: 'Kapman 2',
            id: 'Kapman 2',
            image: 'cc',
            passport: 'Kapman 2',
            payment: 'test@test.com',
            payment2: 'Password',
            state: 'Password',
            status: 'Password',
            statusRealTime: 'Password',
            tel: 'Password',
            ustozid: 'Password',
            sana1: "10",
            sana2: "11",
    }
]

const YangiHujjat = () => {

    const router = useRouter();
    const [rows, setRows] = React.useState([])
  
    let fullData = [];
    const [state, setstate] = useState(1);

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
        if (value.id == state) fullData = value;
    });

    const uploadStudent = () => {
        Axios
        .post('http://localhost:1337/students', {
            FIO: studentData.FIO,
            actives: studentData.actives,
            address: studentData.address,
            direction: studentData.direction,
            id: studentData.id,
            image: studentData.image,
            passport: studentData.passport,
            payment: studentData.payment,
            payment2: studentData.payment2,
            state: studentData.state,
            status: studentData.status,
            statusRealTime: studentData.statusRealTime,
            tel: studentData.tel,
            ustozid: studentData.ustozid,
            sana1: studentData.sana1,
            sana2: studentData.sana2,
            
        })
        .then(response => {
            console.log('User profile', response.data);
            // console.log('User token', respons);
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
    }
    const Malumot=(e,d)=>{ 
        console.log(e);
    }

    const yuklash=()=>{
        uploadStudent();

    }
    const onChangeFun = (value, type) => {
        console.log("value", value)
        studentData[type] = value
        console.log("studentData", studentData)

    }
    return (
        <Dashboard2>
            <Head>
                <title>Dream</title>
                <meta name="description" content="dream education haqida toliq malumot" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <YangiHujjatW>

                <h1 className='text-center mt-5'>Yangi hujjat</h1>
                <div className="container">
                    <div className="row formaun">
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <form>
                                    <label htmlFor="ism" className='mt-3 mb-1'>F.I.O</label>
                                    <input defaultValue={fullData.FIO} onChange={(i)=> {onChangeFun(i.target.value, "FIO")}} type="text" className='form-control' placeholder='name'id="ism" />


                                    <label htmlFor="manzil" className='mt-3 mb-1'>Manzil</label>
                                    <input type="text" className='form-control' defaultValue={fullData.address}  
                                     onChange={(i)=> {onChangeFun(i.target.value, "address")}}
                                    placeholder='Toshkent shahar' id="manzil"  />

                                    <label htmlFor="nomer" className='mt-3 mb-1'>Raqam</label>
                                    <input type="number" className='form-control' defaultValue={fullData.tel} placeholder="+998" 
                                    onChange={(i)=> {onChangeFun(i.target.value, "tel")}} id="nomer" />

                                    <label htmlFor="davlat" className='mt-3 mb-1'>Topshirgan davlat</label>
                                    <input type="text" className='form-control' defaultValue={fullData.state} placeholder="USA" 
                                    onChange={(i)=> {onChangeFun(i.target.value, "state")}} id="davlat" />


                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <form>
                                <label htmlFor="yonalish" className='mt-3 mb-1'>Topshirgan yo'nalish</label>
                                <input type="text" className='form-control' defaultValue={fullData.direction} placeholder="Harvard" 
                                onChange={(i)=> {onChangeFun(i.target.value, "direction")}} id="yonalish" />

                                <label htmlFor="yonalish8" className='mt-3 mb-1'>Ustoz ID</label>
                                <input type="text" className='form-control' defaultValue={fullData.ustozid} placeholder="5" 
                                onChange={(i)=> {onChangeFun(i.target.value, "ustozid")}} id="yonalish8" />

                                <div className='d-flex  justify-content-between '>
                                    <div className='w-100 me-3  '>
                                        <label htmlFor="tolov1" className='mt-3 mb-1'>1- To'lov  </label>
                                        <input type="number" className='form-control' defaultValue={fullData.payment} 
                                        onChange={(i)=> {onChangeFun(i.target.value, "payment")}} placeholder="3200000" id="tolov1" />
                                    </div>

                                    <div className='w-100'>
                                        <label htmlFor="passportid" className='mt-3 mb-1'>1- to'lov qilingan sana</label>
                                        <input type="date" className='form-control' defaultValue={fullData.sana1}  id="passportid" onChange={(i)=> {onChangeFun(i.target.value, "sana1")}} />
                                    </div>
                                </div>


                                <div className='d-flex  justify-content-between '>
                                    <div className='w-100 me-3  '>
                                        <label htmlFor="tolov2" className='mt-3 mb-1'>2- To'lov </label>
                                        <input type="number" className='form-control' placeholder="8900000" id="tolov2" defaultValue={fullData.payment2} onChange={(i)=> {onChangeFun(i.target.value, "payment2")}} />
                                    </div>

                                    <div className='w-100'>
                                        <label htmlFor="sana2" className='mt-3 mb-1'>2- To'lov qilingan sana</label>
                                        <input type="date" className='form-control' id="sana2"  defaultValue={fullData.sana2}  onChange={(i)=> {onChangeFun(i.target.value, "sana2")}} />
                                    </div>

                                </div>

                                <label htmlFor="file" className='mt-3 mb-1'>Hujjat yuklash</label>
                                <input type="file" className='form-control' id="file"  defaultValue={fullData.passport} onChange={(i)=> {onChangeFun(i.target.value, "passport")}} />


                            </form>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary mt-3'  onClick={()=>yuklash()} >Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </YangiHujjatW>
        </Dashboard2>
    )
}

export default YangiHujjat
