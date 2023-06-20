import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, LoanAmt, loanTerm, intrestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const intrestPerMonth = intrestRate / 100 / 12;

  const monthlyPayment =
    (LoanAmt * intrestPerMonth) /
    (1 - 1 / Math.pow(1 + intrestPerMonth, totalLoanMonths));

  const totalInterestGenerated = (
    monthlyPayment * totalLoanMonths -
    LoanAmt
  ).toFixed(2);

  const TotalPayment = parseInt(LoanAmt) + parseInt(totalInterestGenerated);

  const chartData = {
    labels: ["Principle Amont", "Total Interest Amount"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={1}>
      <Typography textAlign={"center"} variant="h5">
        Monthly Payment (EMI) : ₹ {monthlyPayment.toFixed(2)}
      </Typography>
      <Typography textAlign={"center"} variant="h6">
        Total Payment : ₹ {TotalPayment}
      </Typography>
      <Stack direction='row' justifyContent='center'>
      <Pie data={chartData} />
      </Stack>
    </Stack>
  );
};

export default Result;
