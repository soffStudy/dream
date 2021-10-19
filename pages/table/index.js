import React, { useState } from 'react'
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


const Table = () => {
    const router = useRouter();
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
        <Dashboard2>


            <TableWrapper>
                <h1 className='mt-4'>Talabalarning umumiy ma'lumotlari</h1>
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
