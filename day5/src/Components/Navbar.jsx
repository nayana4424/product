import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <AppBar sx={{
            background: 'rgb(238,174,202)',
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
        }}>
            <Toolbar>
                <Typography variant="h6">App</Typography><hr />
                <Link to='/hp'>
                <Button variant='contained' color='info'>Home</Button>&nbsp;&nbsp;
                </Link>
                <Link to='/add'>
                <Button variant='contained' color='info'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar