import React, { useState } from 'react'
import TableWrapper from './TableWrapper';
// import { data } from './data';
// import Link from 'next/link'
import { useRouter } from 'next//router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StudentTable from './table.js'
import ResponsiveDatePickers from './pickers'
import BasicDatePicker from './pickers2'
// import All from '../../components/all'


const Table = () => {
    const router = useRouter()
    const [searchStern, setSearchstern] = useState('');
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleRowClick = (ID) => {
        localStorage.setItem("ID", ID);
        router.push("passport")
        console.log(ID);
    }

    return (
        // <All>


            <TableWrapper>
                <h1>Talabalrning umumiy ma'lumotlari</h1>
                <div className='inputs'>
                    <TextField id="filled-basic" label="Filled" variant="filled" onChange={event => { setSearchstern(event.target.value) }} />
                    <Box sx={{ minWidth: 120 }} className='ms-3 options'>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Active</MenuItem>
                                <MenuItem value={20}>Checked</MenuItem>
                                <MenuItem value={30}>Not active</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div className='inputs_22'>
                        <ResponsiveDatePickers/>
                        <BasicDatePicker  />
                    </div>
                </div>

                {/* mani teybilim */}
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Isim Familiya</th>
                            <th scope="col">Manzili</th>
                            <th scope="col">Telefon raqami</th>
                            <th scope="col">Topshirgan davlati</th>
                            <th scope="col">Topshirgan yo'nalishi</th>
                            <th scope="col">1-To'lov</th>
                            <th scope="col">2-To'lov</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Holati</th>
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
                                } else if (val.tel.toLowerCase().includes(searchStern.toLowerCase())) {
                                    return val
                                }
                            }).map((val, key) => {
                                return (
                                    <tr key={key} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(val.id)}>
                                        <td>{val.name}</td>
                                        <td>{val.address}</td>
                                        <td>{val.tel}</td>
                                        <td>{val.state}</td>
                                        <td>{val.direction}</td>
                                        <td>{val.payment}</td>
                                        <td>{val.payment2}</td>
                                        <td>{val.manager}</td>
                                        <td>{val.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
                <StudentTable />
            </TableWrapper>
        // </All> 
    )
}

export default Table
