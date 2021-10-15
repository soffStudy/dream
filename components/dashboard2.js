import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { FaListUl } from "react-icons/fa";
import { AiTwotoneHome, AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineDocument, HiOutlineDocumentAdd } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import DashWrapper from './Dash2W';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from './footer';




const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <DashWrapper>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <FaListUl />
                        </IconButton>

                        <Typography variant="h6" noWrap component="div" className='w-100'>
                            <div className="container d-flex align-items-center justify-content-end w-100">
                                {/* select dashboard un */}

                                <FormControl variant="standard" className='text-light' sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label" className='text-light' >Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={age}
                                        onChange={handleChange}
                                        label="Age"
                                        className='text-light'

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader className='d-flex justify-content-between'>
                        <div>
                            <img src="DreamEduLogo.png" alt="dream edu rasmlar" width="130px" />
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            <AiOutlineArrowLeft />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>


                        <Link href="asosiy">
                            <ListItem button>
                                <ListItemIcon>
                                    <span className='mb-2 ms-1 fs-4 text-center'><AiTwotoneHome /> </span>
                                </ListItemIcon>
                                <ListItemText>
                                    Asosiy
                                </ListItemText>

                            </ListItem>
                        </Link>

                        <Link href="hujjatlar">
                            <ListItem button>
                                <ListItemIcon>
                                    <span className='mb-2 fs-4 ms-1 '><HiOutlineDocument /> </span>
                                </ListItemIcon>
                                <ListItemText>
                                    Hujjatlar
                                </ListItemText>

                            </ListItem>
                        </Link>

                        <Link href="yangiHujjat">
                            <ListItem button>
                                <ListItemIcon>
                                    <span className='mb-2 fs-4 ms-1 '><HiOutlineDocumentAdd /> </span>
                                </ListItemIcon>
                                <ListItemText>
                                    Yangi Hujjatlar
                                </ListItemText>

                            </ListItem>
                        </Link>


                        <Link href="xodimlar">
                            <ListItem button>
                                <ListItemIcon>
                                    <span className='mb-2 fs-4 ms-1 '><BsPeopleFill /> </span>
                                </ListItemIcon>
                                <ListItemText>
                                    Xodimlar
                                </ListItemText>

                            </ListItem>
                        </Link>

                    </List>

                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                    <DrawerHeader />
                </Box>
            </Box>
            <Footer />
        </DashWrapper>
    );
}