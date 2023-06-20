import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
      <Container >
        <Toolbar>
          <Typography
            variant="h5"
            // noWrap
            component="div"
            sx={{
              mr: 2,
              display: { md: "flex" },
              // flexGrow:1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#90caf9",
              textDecoration: "none",
            }}
          >
            MORTGAGE CALCULATOR
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
