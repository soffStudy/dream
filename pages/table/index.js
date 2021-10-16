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
                        <ResponsiveDatePickers />
                        <BasicDatePicker />
                    </div>
                </div>
                <StudentTable />
            </TableWrapper>
        </Dashboard2>
    )
}

export default Table
