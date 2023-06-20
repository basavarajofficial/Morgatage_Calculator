import React from "react";
import SliderComp from "./common/SliderComp";
import { Stack } from "@mui/material";

const SlidersSelect = ({data, setData}) => {

  console.log(data);


  return (
    <>
    <Stack my={1.4}  >
      <SliderComp
        label="Home Value"
        step={1000}
        min={1000}
        max={50000}
        defaultValue={10000}
        value={data.homeValue}
        unit={"₹"} 
        amount={data.homeValue}
        onChange={(_e,val) => {setData({
          ...data, 
          homeValue: val,
          DownPayment : val * 0.2,
          LoanAmt: val * 0.8
        })} }
      />
      <SliderComp
        label="Down Payment"
        step={1000}
        min={0}
        max={data.homeValue}
        defaultValue={data.DownPayment}
        value={data.DownPayment}
        unit={"₹"} 
        amount={data.DownPayment}
        onChange={(_e, val) =>{setData({
          ...data,
          LoanAmt : (data.homeValue - val),
          DownPayment:val})}}
      />

      <SliderComp
        label="Loan Amount"
        step={1000}
        min={0}
        max={data.homeValue}
        defaultValue={data.LoanAmt}
        value={data.LoanAmt}
        unit={"₹"} 
        amount={data.LoanAmt}
        onChange={(_e, val) => {setData({
          ...data,
          DownPayment: (data.homeValue - val),
           LoanAmt: val})}}
      />

      <SliderComp
        label="Intrest Rate"
        step={0.5}
        min={2}
        max={18}
        defaultValue={data.intrestRate}
        value={data.intrestRate}
        unit={"%"} 
        amount={data.intrestRate}
        onChange={(_e, val) => {setData({...data, intrestRate:val})}}
      />
      </Stack>
    </>
  );
};

export default SlidersSelect;
