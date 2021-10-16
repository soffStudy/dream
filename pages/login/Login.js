import React, { useState } from 'react';
import GloginW from './LoginWrapper';
import Form from './Form';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Head from 'next/head'


// Bu yrda email va password tekshiriladi

function Glogin() {
  const router = useRouter();

  const adminUser = {
    email: "Ibrohim",
    password: "asdf"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {

    if (details.email == adminUser.email && details.password == adminUser.password) {
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
          </div>
        ) : (
          <Form Login={Login} error={error} />
        )}
      </div>
    </GloginW>
  );

}

export default Glogin;