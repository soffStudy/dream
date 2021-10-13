import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { FaListUl } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { HiOutlineDocument, HiOutlineDocumentAdd } from "react-icons/hi";
import Layout from '../styleW/layout';
// import { FaListUl } from "react-icons/fa";





export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link href="asosiy">
                    <ListItem button>
                        <a><span className='mb-2 fs-5'><AiTwotoneHome /> </span>Asosiy</a>
                    </ListItem>
                </Link>

                <Link href="hujjatlar">
                    <ListItem button>
                        <a><span className='mb-2 fs-5'><HiOutlineDocument /> </span>Hujjatlar</a>
                    </ListItem>
                </Link>

                <Link href="yangiHujjat">
                    <ListItem button>
                        <a><span className='mb-2 fs-5'><HiOutlineDocumentAdd /> </span>Yangu hujjatlar</a>
                    </ListItem>
                </Link>

            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} className="fw-bold ms-2 fs-3 btn-primary" > <FaListUl /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}