import React, {useState} from 'react';
import './App.css';
import Register from './components/Register';
import { ThemeProvider, createTheme, CssBaseline, Container, Grid } from '@mui/material';
import {
  Route,
  Routes,
} from "react-router-dom";
import CreditCard from './components/CreditCard';
import Navbar from "./components/Navbar/Navbar"
import CreditCardTable from './components/CreditCardTable';
import Home from './components/Home';
// import {CreditCardDetails} from './types/cardDetailsTypes'

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a1625', 
    },
    secondary: {
      main: '#ff4136', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});



interface CardDetails {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  country: string;
}


function App(CardDetails: any) {
  const [capturedCards, setCapturedCards] = useState<CardDetails[]>([]);


  const handleCardSubmit = (card: CardDetails) => {
    setCapturedCards([...capturedCards, card]);
  };
  

  return (
        <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <>
        <Navbar />
        <Container maxWidth="sm">
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: '100vh' }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                * <Route
                  path="/credit-card"
                  element={<CreditCard onCardSubmit={handleCardSubmit} />}
                />


                <Route  path='/table' element={<CreditCardTable creditCards={capturedCards} />} /> 
              </Routes>
            </Grid>
          </Container>
        </>
  </ThemeProvider>
      
  );
}

export default App;
