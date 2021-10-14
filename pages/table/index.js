import React, { useState } from 'react'
import TableWrapper from './TableWrapper';
import { data } from './data';
import Link from 'next/link'
import { useRouter } from 'next//router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import All from '../../components/all'


const Table = () => {
    const router = useRouter()

    const [searchStern, setSearchstern] = useState('');

    // const studentFullData = (val) => {
    //     console.log(val)
    //     router.push({
    //         pathname: 'docs',
    //         query: val
    //     })
    // }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleRowClick = (ID) => {
        localStorage.setItem("ID", ID);
        console.log(ID);
    }

    return (
        <All>

            <TableWrapper>
                <h1>Table</h1>
                <div className='d-flex'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    ></Box>
                    <TextField id="filled-basic" label="Filled" variant="filled" onChange={event => { setSearchstern(event.target.value) }} />

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Isim Familiya</th>
                            <th scope="col">Manzili va Telefon raqami</th>
                            <th scope="col">id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.filter((val) => {
                                if (searchStern == "") {
                                    return val
                                } else if (val.address.toLowerCase().includes(searchStern.toLowerCase())) {
                                    return val
                                } else if (val.name.toLowerCase().includes(searchStern.toLowerCase())) {
                                    return val
                                } else if (val.id.toLowerCase().includes(searchStern.toLowerCase())) {
                                    return val
                                }
                            }).map((val, key) => {
                                return (
                                    <Link href="passport">
                                        <tr key={key} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(val.id)}
                                            className={val.rang == "yashil" && "yashil" || "sariq"} >
                                            <td>{val.name}</td>
                                            <td>{val.address}</td>
                                            <td>{val.id}</td>
                                        </tr>
                                    </Link>

                                )
                            })
                            // .indexOf(q.toLowerCase()) > -1,
                        }
                    </tbody>
                </table>
            </TableWrapper>
        </All>
    )
}

export default Table
