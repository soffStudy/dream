import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import Data from '../xodimlar/dataXodimlar';
import Data2 from '../table/data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Dashboard2 from '../../components/dashboard2'
import Hujjat from '../xodimlar/xodimlarW'
import { AiOutlineFieldNumber } from "react-icons/ai";
// bu page hali ohirigacha yetmagan




function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'number',
        numeric: false,
        disablePadding: true,
        label: 'Number',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'F.I.O',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: true,
        label: 'Manzil',
    },
    {
        id: 'tel',
        numeric: true,
        disablePadding: false,
        label: 'Telefon raqam',
    },
    {
        id: 'state',
        numeric: false,
        disablePadding: false,
        label: 'Topshirgan davlati',
    },
    {
        id: 'direction',
        numeric: true,
        disablePadding: false,
        label: "Topshirgan yo'nalishi",
    },
    {
        id: 'payment',
        numeric: true,
        disablePadding: false,
        label: '1-tolov',
    },
    {
        id: 'payment2',
        numeric: true,
        disablePadding: false,
        label: '2-tolov',
    },
    {
        id: 'active',
        numeric: true,
        disablePadding: false,
        label: 'Statusi',
    }
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (

        <TableHead>
            <TableRow className="thuchun">
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className="fs-5 text-center"
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const router = useRouter();
    const [rows, setRows] = React.useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (ID) => {
        localStorage.setItem("ID", ID);
        router.push("passport")
        console.log(ID);

    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    const routerr = useRouter();
    console.log(routerr.query.types);


    const [ism, setIsm] = useState();


    useEffect(() => {
        setIsm(localStorage && localStorage.getItem("name"));

    }, []);



    return (
        <Dashboard2>
            <Hujjat>


                <h1 className='text-center'>Ishlangan talabalar ro'yxati </h1>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>F.I.O</th>
                            <th>Manzil</th>
                            <th>Tel raqam</th>
                            <th>topshirgan Davlat</th>
                            <th>Topshirga Yo'nalishi</th>
                            <th>1- To'lov</th>
                            <th>2-To'lov</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                        {Data2.map((row, i) => {
                            return <tr
                                onClick={() => handleClick(row.id)}
                                key={row.name}
                                className={row.ustoz == ism && "d" || "d-none"}
                            >
                                <td align="right" className="text-center">{row.id}</td>
                                <td align="right" className="text-center">{row.name}</td>
                                <td align="right" className="text-center">{row.address}</td>
                                <td align="right" className="text-center">{row.tel}</td>
                                <td align="right" className="text-center">{row.state}</td>
                                <td align="right" className="text-center">{row.direction}</td>
                                <td align="right" className="text-center">{row.payment}</td>
                                <td align="right" className="text-center">{row.payment2}</td>
                                <td align="right"><div className={` yumaloq  ${row.actives == "tolagan" && "yashil" || "sariq"}`}></div> </td>


                            </tr>

                        })}
                    </tbody>
                </table>

            </Hujjat>
        </Dashboard2>
    );
}
