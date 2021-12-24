
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import UserRoutes from '../userroutes'
import Footer from '../../common/components/Footer'
import {Header,Head} from '../../common/components/Header'
import Menu from '../../common/components/UserSlidebar'
import Message from '../../common/messages/Messanger'

function UserDashboard() {
    const mdTheme = createTheme();


    const [open, setOpen] = React.useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <ThemeProvider theme={mdTheme}>
            
            <Box sx={{ display: 'flex' }}>
            <Head/>
            <CssBaseline />
            <Menu toggleDrawer={toggleDrawer} open={open} />

            <Box component="main" sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    >
             <Toolbar />            

             <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12} md={12} lg={12}>
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <UserRoutes/>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Footer sx={{ pt: 4 }} />
                        </Container>
            </Box>
            <Message />
            </Box>
         
        </ThemeProvider>
       
    )
}
export default UserDashboard;
  