import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
       
        <br/>
       
        {'Copyright © '}
        <Link color="inherit" href="https://www.persistent.com/">
        Persistent Systems
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}