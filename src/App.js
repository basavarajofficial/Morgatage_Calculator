import { Container, Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SlidersSelect from "./components/SlidersSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";

function App() {

  const [data, setData] = useState({
    homeValue : 10000,
    DownPayment : 10000 * 0.2,
    LoanAmt : 10000 * 0.8,
    loanTerm : 5,
    intrestRate : 5
  })
  return (
    <div className="App">
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 4,
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SlidersSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result data={data}  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
