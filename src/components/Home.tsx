import React from "react";
import { Grid, Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Cards from "../assets/images/credit.png";
import './CreditCard.css'

const LandingPage = () => {
  return (
    <Container className="landing-container" >
      <Grid
        container
        spacing={3}
      >
            <Grid item xs={12} sm={6}>
              <Box>
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
                sx={{ mt: 3, mb: 2, borderRadius: "25px" , backgroundColor:" #38598b" }}
              >
                Login
              </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box className="image-container">
                  <img src={Cards} alt="Credit Card 1" width="100%" />
                </Box>
              </Grid>
            </Grid>
    </Container>
  );
};

export default LandingPage;
