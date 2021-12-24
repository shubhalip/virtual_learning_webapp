import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import AuthService from '../../components/AuthService'
import { Link } from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

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

function Header(props) {
    return (
        <AppBar position="absolute" open={props.open} style={{backgroundColor: "#00BFFF"}}>
           

            <Toolbar sx={{ pr: '24px' }}>
                 
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={props.toggleDrawer}
                    sx={{ marginRight: '36px', ...(props.open && { display: 'none' }), }} >
                    
                </IconButton>
                <Typography component="h1" variant="h6"  color="inherit" fontWeight="bold" noWrap sx={{ flexGrow: 1 }}><b>E-Learning</b></Typography>
               
               
            </Toolbar>
                   
            
                
            
        
        </AppBar>
    );
}


function Head(props) {
    return (
       <>
               
               <AppBar position="absolute" open={props.open} style={{backgroundColor: "#00BFFF"}}>
           

           <Toolbar sx={{ pr: '24px' }}>
                
               <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={props.toggleDrawer}
                   sx={{ marginRight: '36px', ...(props.open && { display: 'none' }), }} >
                  
               </IconButton>
               <Typography component="h1" variant="h6"  color="inherit" fontWeight="bold" noWrap sx={{ flexGrow: 1 }}><b>E-Learning</b></Typography>
              
               <form className="d-flex">
               <Button startIcon={<LogoutIcon />} color="secondary" variant="contained" onClick={AuthService.logout} href="/">
                 Logout
                </Button>               
                  
           </form>
           </Toolbar>
                  
           
               
           
       
       </AppBar>
       </>

    );
}

export{
    Head,Header
}