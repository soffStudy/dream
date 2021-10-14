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

            <h1>salom</h1>
        </All>
    )
}

export default Table
