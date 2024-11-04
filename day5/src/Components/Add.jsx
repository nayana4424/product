import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div class="form">
        <br /><br /><br />
        <TextField variant="outlined" color="secondary" label="Product" margin="normal" /><br />
      <TextField variant="outlined"  label="Description" margin="normal" /><br />
      <TextField variant="outlined"  label="Price"  margin="normal" /><br />
      <TextField variant="outlined"  label="Category"  margin="normal" /><br />
      <Button variant="contained" color="info" style={{ marginTop: '16px' }}>Submit</Button>
    </div>
  )
}

export default Add