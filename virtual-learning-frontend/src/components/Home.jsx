import { flexbox } from '@mui/system';
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { useNavigate } from 'react-router-dom';

const ButtonGroup = styled.div`
  display: flex;
  
`
const myComponentStyle = {
   
    alignItems:'center',
    display: 'flex',
    justifyContent:'center'

 }
const Button = styled.button`
  background-color: MidnightBlue;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;`

function Home () {
   
    
  const navigate = useNavigate();
    
   
    const handleAdminLoginClick=()=>{
        navigate('/admin');
    }

    const handleUserLoginClick=()=>{
        navigate('/user');
    }

  
// Usage

    
        return (
            
            <div >
                     <div  style={myComponentStyle} className="col-md-6 col-md-offset-4" onClick={ handleAdminLoginClick}><Button> Admin Login</Button></div>
                    
                    <div  style={myComponentStyle} className="col-md-6 col-md-offset-4" onClick={handleUserLoginClick}> <Button> User Login </Button></div>
                   
           </div>
        );
    }


export default Home;