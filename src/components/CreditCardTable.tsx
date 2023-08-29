import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "./CreditCard.css";

interface CardDetails {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  country: string;
}

interface CreditCardTableProps {
  creditCards: CardDetails[];
}

const CreditCardTable: React.FC<CreditCardTableProps> = ({ creditCards }) => {
  const navigate = useNavigate();

const handleGoBack = () => {
   navigate("/credit-card");
}
const handleCardDisplay = () => {
   navigate("/");
}

  return (
    <Table sx={{ minWidth: 1050, mt: 2 }} aria-label="Credit Card Table">
      <Box
        sx={{
          backgroundImage:"linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
          borderRadius: '10px',
          backgroundColor: 'transparent',
        }}
      >
       <TableHead>
       <TableRow>
       <TableCell>Card </TableCell>
       <TableCell>Card Number</TableCell>
            <TableCell>Card Name</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell>CVV</TableCell>
            <TableCell>Country</TableCell>
            </TableRow>

        </TableHead>
        <TableBody>
          {creditCards.map((card, index) => (
            <TableRow key={index}>
                  <TableCell>
                <Cards
                  number={card.number}
                  name={card.name}
                  expiry={card.expiry}
                  cvc={card.cvc}
                />
              </TableCell>
           <TableCell>{card.number}</TableCell>
              <TableCell>{card.name}</TableCell>
              <TableCell>{card.expiry}</TableCell>
              <TableCell>{card.cvc}</TableCell>
              <TableCell>{card.country}</TableCell>
          

              </TableRow>
          ))}
       </TableBody>
       <Grid container spacing={2}>
     <Grid item xs={6}>
       <Button
         type="button"
         fullWidth
         variant="outlined"
         color="primary"
         onClick={handleGoBack}
         sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
       >
         Go Back
       </Button>
     </Grid>
     <Grid item xs={6}>
       <Button
         type="submit"
         fullWidth
         variant="outlined"
         color="primary"
         onClick={handleCardDisplay}
         sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
       >
         Home
       </Button>
     </Grid>
   </Grid>
    </Box>
    </Table>
  );
};

export default CreditCardTable;
