import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComp = ({ defaultValue, min, max, step,unit, amount, onChange, value, label }) => {
  return (
    <>
    <Stack gap={2} direction={"column"}>
      <Typography variant="subtitle2" color={'rgb(144,202,249)'} fontWeight={700}>{label}</Typography>
      <Typography variant="h5" >{unit} {amount}</Typography>
    </Stack>
      <Slider
        step={step}
        marks
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
      />
      <Stack direction={"row"} justifyContent={"space-between"} color="text.secondary" >
        <Typography  variant='caption'>{unit} {min}</Typography>
        <Typography variant='caption'>{unit} {max}</Typography>
      </Stack>
    
    </>
  );
};

export default SliderComp;
