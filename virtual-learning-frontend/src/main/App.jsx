
import * as React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Footer from '../common/components/Footer'
import {Header} from '../common/components/Header'
import Sidebar from '../common/components/Sidebar'
import Messanger from '../common/messages/Messanger'
import header1 from '../assets/header1.jpg'

import Home from "../components/Home"
import "../App.scss";
import AdminLoginComponent from '../components/AdminLoginComponent';
import UserLoginComponent from '../components/UserLoginComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import HeaderComponent from '../components/HeaderComponent'
import ARegister from '../components/a_register'
import URegister from '../components/u_register'

import AdminDashboard from './dashboard/AdminDashboard'
import UserDashboard from './dashboard/UserDashboard'

function App() {
    const mdTheme = createTheme();


    const [open, setOpen] = React.useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <ThemeProvider theme={mdTheme}>
          
           
            <CssBaseline />
            <Header toggleDrawer={toggleDrawer} open={open} />
            <Box component="main" sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        backgroundImage:`url(${header1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                       
                    }}
                    >
             <Toolbar />   
             <Container maxWidth="s" sx={{ mt:2, mb: 4}}>
                            <Grid container direction="row" justify="center" alignItems="center" >
                                <Grid item xs={12} md={12} lg={12}>
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' ,backgroundColor:'#E0FFFF'}}>
            <div >
              
          <BrowserRouter>
           <Routes>
              <Route element={<HeaderComponent/>}></Route>
              <Route exact path="/" element={<Home/>} ></Route>
              <Route  exact path="/aregister" element={<ARegister/>} ></Route>
              <Route  exact path="/uregister" element={<URegister/>} ></Route>

              <Route  exact path="/adashboard/*" element={<AdminDashboard/>} ></Route>
              <Route  exact path="/udashboard/*" element={<UserDashboard/>} ></Route>
              <Route  exact path="/user" element={<UserLoginComponent/>} ></Route>
              <Route exact path="/admin" element={<AdminLoginComponent/>} ></Route>

             </Routes>
             </BrowserRouter>
             

      </div>
      </Paper>
      </Grid>
      </Grid>
      <Footer sx={{ pt: 4 }} />
     </Container>
   </Box>
            
            
        </ThemeProvider>
       
    )
}
export default App;
  