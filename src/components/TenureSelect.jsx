import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({data, setData}) => {


  const handleChange = (event) => {
    setData({
      ...data, 
      loanTerm: event.target.value
    })
  };


  return (
    <div>
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={1}>1 year</MenuItem>
          <MenuItem value={2}>2 year</MenuItem>
          <MenuItem value={3}>3 year</MenuItem>
          <MenuItem value={5}>5 year</MenuItem>
          <MenuItem value={10}>10 year</MenuItem>
          <MenuItem value={20}>20 year</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  )
}

export default TenureSelect
