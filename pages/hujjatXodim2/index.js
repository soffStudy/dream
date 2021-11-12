import * as React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
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
import Data2 from '../table/data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Dashboard2 from '../../components/dashboard2'
import Hujjat from '../xodimlar/xodimlarW'



function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

// const rows = data

function descendingComparator(a, b, orderBy) {
    ``
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
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
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
    const [rows, setRows] = React.useState([])
    const [state, setstate] = useState(1);
    const [ism, setIsm] = useState();



    useEffect(() => {
        Axios.get(`http://localhost:1337/students`).then((result) => {
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
                  setRows(result.data)
              }
            
        }).catch((err) => {
            
        });
        setstate(localStorage && localStorage.getItem("ID"));
        console.log("ssdsdvwd" , state);
        setIsm(localStorage && localStorage.getItem("name"));

    }, []);

    console.log( rows);

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
        router.push({
            pathname: 'passport',
            query: { "salom": 2 }
        })

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



    return (
        <Dashboard2>
            <Hujjat>
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <TableContainer className='materialTable'>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>

                                    {stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.name);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (

                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(index + 1)}
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.name}
                                                    className={row.ustozid == state && "d" || "d-none"}
                                                >
                                                    <TableCell align="right">{row.id}</TableCell>

                                                    <TableCell
                                                        // component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                        className='ps-2'
                                                    >
                                                        {row.FIO}
                                                    </TableCell>
                                                    <TableCell align="right">{row.address}</TableCell>
                                                    <TableCell align="right">{row.tel}</TableCell>
                                                    <TableCell align="right">{row.state}</TableCell>
                                                    <TableCell align="right">{row.direction}</TableCell>
                                                    <TableCell align="right">{row.payment}</TableCell>
                                                    <TableCell align="right">{row.payment2}</TableCell>
                                                    <TableCell align="right"><div className={` yumaloq  ${row.actives == "tolagan" && "yashil" || "sariq"}`}></div> </TableCell>

                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                    <FormControlLabel
                        control={<Switch checked={dense} onChange={handleChangeDense} />}
                        label="Dense padding"
                    />
                </Box>
            </Hujjat>
        </Dashboard2>
    );
}