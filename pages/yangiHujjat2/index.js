import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Dashboard2 from '../../components/dashboard2'
import YangiHujjatW from './yangiHujjat2W'
import { useRouter } from 'next/router'
import Axios from "axios"

let studentData = [
    {
        name: 'Kapman 2',
        tel: 'Kapman 2',
        id: 'Kapman 2',
        passport: 'Kapman 2',
        ism: 'test@test.com',
        familiya: 'Password',
        login: 'Password',
        password: 'Password',
        lavozimi: 'Password',
    }
]

const YangiHujjat = () => {

    const router = useRouter();
    const [rows, setRows] = React.useState([])
  
    let fullData = [];
    const [state, setstate] = useState(1);

    useEffect(() => {
        Axios.get(`http://localhost:1337/teachers`).then((result) => {
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
        .post('http://localhost:1337/teachers', {

            name: studentData.name,
            tel: studentData.tel,
            id: studentData.id,
            passport: studentData.passport,
            ism: studentData.ism,
            familiya: studentData.familiya,
            login: studentData.login,
            password: studentData.password,
            lavozimi: studentData.lavozimi,
            
        })
        .then(response => {
            console.log('User profile', response.data);
            // console.log('User token', respons);
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
    }

    const yuklash=()=>{
        uploadStudent();
        // Alert("tugadi");
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
                                    <label htmlFor="ism" className='mt-3 mb-1'>Xodim F.I.O</label>
                                    <input defaultValue={fullData.name} onChange={(i)=> {onChangeFun(i.target.value, "name")}} type="text" className='form-control' placeholder='name'id="ism" />


                                    <label htmlFor="manzil" className='mt-3 mb-1'>Lavozimi</label>
                                    <input type="text" className='form-control' defaultValue={fullData.lavozimi}  
                                     onChange={(i)=> {onChangeFun(i.target.value, "lavozimi")}}
                                    placeholder='Toshkent shahar' id="manzil"  />

                                    <label htmlFor="nomer" className='mt-3 mb-1'>Raqam</label>
                                    <input type="number" className='form-control' defaultValue={fullData.tel} placeholder="+998" 
                                    onChange={(i)=> {onChangeFun(i.target.value, "tel")}} id="nomer" />

                                    <label htmlFor="davlat" className='mt-3 mb-1'>Password</label>
                                    <input type="text" className='form-control' defaultValue={fullData.password} placeholder="777" 
                                    onChange={(i)=> {onChangeFun(i.target.value, "password")}} id="davlat" />


                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <form>
                                <label htmlFor="yonalish" className='mt-3 mb-1'>Login </label>
                                <input type="text" className='form-control' defaultValue={fullData.login} placeholder="nmadir" 
                                onChange={(i)=> {onChangeFun(i.target.value, "login")}} id="yonalish" />

                               


                              

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
