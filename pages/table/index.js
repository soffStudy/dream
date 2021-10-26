import React, { useState, useEffect } from 'react'
import TableWrapper from './TableWrapper';
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
import Dashboard2 from '../../components/dashboard2'
import axios from 'axios';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Table = () => {
    const router = useRouter();
    const [searchStern, setSearchstern] = useState('');
    const [age, setAge] = React.useState('');
    const [data3, setData] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleRowClick = (ID) => {
        localStorage.setItem("ID", ID);
        router.push("passport")
        console.log(ID);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log("Getting from :::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, []);

    if (!data3) return null;

    return (
        <Dashboard2>


            <TableWrapper>
                <h1 className='mt-4 students' style={{padding: '10px', borderRadius: '5px'}}> <PeopleAltIcon style={{fontSize: '40px'}}/> Talabalarning umumiy ma'lumotlari</h1>
                <div className="row mt-4 mb-3">
                    <div className="col-lg-3">
                        <TextField id="filled-basic" label="F.I.O" variant="filled" onChange={event => { setSearchstern(event.target.value) }} />
                    </div>
                    <div className="col-lg-3">
                        <Box sx={{ minWidth: 120 }} className='ms-3 options w-100%'>
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>To'lov tugatilgan talabalar</MenuItem>
                                    <MenuItem value={20}>Pul to'lanmagan talabalar</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="col-lg-3">
                        <ResponsiveDatePickers />
                    </div>
                    <div className="col-lg-3">
                        <BasicDatePicker />
                    </div>
                </div>

                <StudentTable />
                <div>
                    <table className='table'>
                        <thead>
                            <tr className='hover'>
                                <th>id</th>
                                <th>Title</th>
                                <th>userid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>1</td>
                                <td>Barc</td>
                                <td>23</td>
                            </tr> */}
                            <tr>
                                <td>{data3.id}</td>
                                <td>{data3.title}</td>
                                <td>{data3.userId}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='statusW'>
                    <div className='payment'>
                        <div className='span1'></div>
                        <p>To'lov tugatilgan talabalar</p>
                    </div>
                    <div className='payment'>
                        <div className='span2'></div>
                        <p>Pul to'lanmagan talabalar</p>
                    </div>
                </div>

            </TableWrapper>
        </Dashboard2>
    )
}

export default Table
