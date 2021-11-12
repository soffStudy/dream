import React, { useState , useEffect} from 'react';
import GloginW from './LoginWrapper';
import Form from './Form';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Head from 'next/head'
import MiniDrawer from './../../components/dashboard2'
import Axios from 'axios'


// Bu yrda email va password tekshiriladi

function Glogin() {
 
    const router = useRouter();
    const [rows, setRows] = React.useState([])
    const [state, setstate] = useState(1);
    const [ism, setIsm] = useState();



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
                setRows(exactData);
               
              } else {
                  setRows(result.data)
              }
            
        }).catch((err) => {    
        });
    }, []);

    console.log( rows);

 

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");


  const Login = details => {
    for (let i = 0; i < rows.length; i++) {
      console.log(rows[i].login);
       if (details.email == rows[i].login && details.password == rows[i].password) {
      setUser({
        name: details.email,
        email: details.email
      })
      localStorage.setItem("name", details.email)
      router.push({
        pathname: "asosiy",
        query: details.role
      })
    } else {
      console.log("Ma'lumot topilmadi");

      setError("Error")
    }
    
       
    }
   
  }

 
  return (
    <GloginW >
      <Head>
        <title>Dream</title>
        <meta name="description" content="Uzbekistan soliq haqida umumiy malumot" />
        <meta name="key words" content="Ozbekiston soliq idorasi, soliq turlari, soliq haqidagi hujjatlar" />
        <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
      </Head>
      <div className="App">
        {(user.email != "") ? (
          <div className="loading">
            <Box sx={{ display: 'flex' }}>
              <CircularProgress className="loading2" />
            </Box>
            {/* <h1>{user.name}</h1>  */}
          </div>
        ) : (
          <Form Login={Login} error={error} />
        )}
      </div>
    </GloginW>
  );

}

export default Glogin;