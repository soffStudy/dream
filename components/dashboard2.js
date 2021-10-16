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
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExitToAppIcon from '@mui/material/Avatar';
import Footer from './footer';
import { useRouter } from 'next/router';
import Clock from './clock';
import Button from '@mui/material/Button';
import {useEffect} from 'react'
// import Menu from '@mui/material/Menu';




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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    useEffect(() => {
        const storage = localStorage.getItem("name");
        console.log(storage);
        if(!storage) router.push("/");
    }, [])

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
    const router = useRouter();

    const handleRowClick2 = () => {
        router.push("konsultatsiya");
        console.log(router.query.keyword);
    }

    const handleRowClick3 = () => {
        localStorage.clear()
        router.push("/");
        console.log(router.query.keyword);
    }

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open2 = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };



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

                                <div className="d-flex justiy-content-center align-items-center h-100">
                                    <Clock />

                                </div>

                                <Tooltip title="Account settings">
                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                    <Avatar />
                                </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={() => handleRowClick3()}>
                                    <ExitToAppIcon className='me-2'/> Tizimidan chiqish
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader className='d-flex justify-content-between'>
                        <div>
                            <img src="de2.png" alt="dream edu rasmlar" width="130px" />
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