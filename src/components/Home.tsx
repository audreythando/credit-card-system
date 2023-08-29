import React from "react";
import { Grid, Button, Typography, Container, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Cards from "../assets/images/credit.png";

const LandingPage = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
    <Container >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100%" , width:"1050px"}}
      >
        <Box
          component={Paper}
          elevation={3}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(to bottom right, #385170, #142d4c, #38598b)",
            borderRadius: "10px",
            backgroundColor: "transparent",
            minHeight: "100%",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom  color="inherit">
                Welcome to Our Credit Card Validation System
              </Typography>
              <Typography variant="body1" paragraph>
The system allows Admins to submit and validate all credit cards easily by flaging any irregularities and ensuring that we run a safe and fraud free payment system for our clients .
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/register"
                sx={{ mt: 3, mb: 2, borderRadius: "25px"  }}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={Cards} alt="Credit Card 1" width="100%" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
    </Box>
  );
};

export default LandingPage;
