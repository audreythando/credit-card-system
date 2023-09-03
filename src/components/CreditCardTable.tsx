import {
  Box,
  Button,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Modal,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "react-credit-cards-2";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CreditCard.css";
import { Form, Formik} from "formik";


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
  const [searchCriteria, setSearchCriteria] = useState({
    number: "",
    name: "",
    country: "",
  });
  const [filteredCards, setFilteredCards] = useState(creditCards);
  const [editingCardIndex, setEditingCardIndex] = useState(-1);
  const [editModalOpen, setEditModalOpen] = useState(false);
const [editedCard, setEditedCard] = useState<CardDetails | null>(null);


  const handleGoBack = () => {
    navigate("/credit-card");
  };

  const handleCardDisplay = () => {
    navigate("/");
  };

  const handleSearch = () => {
    // Filter the creditCards array based on search criteria
    const filtered = creditCards.filter((card) => {
      const { number, name, country } = searchCriteria;
      return (
        card.number.includes(number) &&
        card.name.includes(name) &&
        card.country.includes(country)
      );
    });
    setFilteredCards(filtered);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const openEditModal = (card: CardDetails) => {
    setEditedCard(card);
    setEditModalOpen(true);
  };
  

  const handleEditCard = (editedCard: CardDetails) => {
    const updatedCards = filteredCards.map((card) => {
      if (card.number === editedCard.number) {
        return editedCard;
      }
      return card;
    });
    setFilteredCards(updatedCards);
    setEditModalOpen(false);
  
    // Update local storage if needed
    const storedCards = JSON.parse(localStorage.getItem("creditCards") || "[]") as CardDetails[];
    const updatedStoredCards = storedCards.map((card) => {
      if (card.number === editedCard.number) {
        return editedCard;
      }
      return card;
    });
    localStorage.setItem("creditCards", JSON.stringify(updatedStoredCards));
  };
  
  const handleSaveEdit = (index: number, editedCard: CardDetails) => {
    const updatedCards = [...creditCards];
    updatedCards[index] = editedCard;
    setFilteredCards(updatedCards);
    setEditingCardIndex(-1); 
  };

  const handleDeleteCard = (cardNumber: string) => {
    // Update local storage to remove the card
    const storedCards = JSON.parse(localStorage.getItem("creditCards") || "[]") as CardDetails[];
    const updatedStoredCards = storedCards.filter((card) => card.number !== cardNumber);
    localStorage.setItem("creditCards", JSON.stringify(updatedStoredCards));
  
    // Update the filteredCards state to remove the card
    const updatedCards = filteredCards.filter((card) => card.number !== cardNumber);
    setFilteredCards(updatedCards);
  };
  
  
  

  return (
    <Box sx={{ minWidth: 1050, mt: 2 }} aria-label="Credit Card Table">
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
          borderRadius: "10px",
          backgroundColor: "transparent",
        }}
      >
        <TextField
          label="Card Number"
          name="number"
          value={searchCriteria.number}
          onChange={handleInputChange}
          sx={{ margin: "0.5rem" }}
        />
        <TextField
          label="Card Name"
          name="name"
          value={searchCriteria.name}
          onChange={handleInputChange}
          sx={{ margin: "0.5rem" }}
        />
        <TextField
          label="Country"
          name="country"
          value={searchCriteria.country}
          onChange={handleInputChange}
          sx={{ margin: "0.5rem" }}
        />
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={handleSearch}
          sx={{ margin: "0.5rem", borderRadius: "25px" ,backgroundColor:" #38598b"}}
        >
          Search
        </Button>

        <Divider sx={{mt:4}}/>

        <TableHead>
          <TableRow>
            <TableCell>Card</TableCell>
            <TableCell>Card Number</TableCell>
            <TableCell>Card Name</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell>CVV</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCards.map((card, index) => (
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
              <TableCell>
                {editingCardIndex === index ? (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{backgroundColor:" #38598b"}}
                    onClick={() => handleSaveEdit(index, card)}
                  >
                    Save
                  </Button>
                ) : (
                  <>
                    <IconButton
                      color="primary"
                      aria-label="Edit"
                      onClick={() => openEditModal(card)}
                    >
                      <EditIcon  color="primary" sx={{backgroundColor:" #38598b"}} />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      aria-label="Delete"
                      onClick={() => handleDeleteCard(card.number)}
                    >
                      <DeleteIcon  color="primary"sx={{backgroundColor:" #38598b"}}/>
                    </IconButton>
                  </>
                )}
              </TableCell>
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
              sx={{ mt: 3, mb: 2, borderRadius: "25px", backgroundColor:" #38598b" }}
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
              sx={{ mt: 3, mb: 2, borderRadius: "25px", backgroundColor:" #38598b" }}
            >
              Home
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Modal
  open={editModalOpen}
  onClose={() => setEditModalOpen(false)}
  aria-labelledby="edit-card-modal"
  aria-describedby="edit-card-modal-description"
  sx={{color:"primary"}}
>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: ' #38598b', boxShadow: 24, p: 4, borderRadius: '10px' }}>
    <Typography variant="h6">Edit Card</Typography>
    <Divider/>
    <Formik
  initialValues={editedCard || { number: '', name: '', expiry: '', cvc: '', country: '' }}
  onSubmit={(values) => {
    handleEditCard(values);
  }}
>
  {({ values, handleChange, handleSubmit, isSubmitting, errors, touched }) => (
    <Form >
        <Grid container spacing={1}>
      <Grid item>
      <TextField
        fullWidth
        label="Card Number"
        variant="outlined"
        name="number"
        value={values.number}
        onChange={handleChange}
        error={touched.number && Boolean(errors.number)}
        helperText={touched.number && errors.number}
      />
      </Grid>
      <Grid item>
      <TextField
        fullWidth
        label="Card Name"
        variant="outlined"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      </Grid>
      <Grid item>
      <TextField
        fullWidth
        label="Expiration Date"
        variant="outlined"
        name="expiry"
        value={values.expiry}
        onChange={handleChange}
        error={touched.expiry && Boolean(errors.expiry)}
        helperText={touched.expiry && errors.expiry}
      />
      </Grid>
      <Grid item>
      <TextField
        fullWidth
        label="CVC"
        variant="outlined"
        name="cvc"
        value={values.cvc}
        onChange={handleChange}
        error={touched.cvc && Boolean(errors.cvc)}
        helperText={touched.cvc && errors.cvc}
      />
      </Grid>
      <Grid item>
      <TextField
        fullWidth
        label="Country"
        variant="outlined"
        name="country"
        value={values.country}
        onChange={handleChange}
        error={touched.country && Boolean(errors.country)}
        helperText={touched.country && errors.country}
      />
      </Grid>
      <Grid item>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        disabled={isSubmitting}
      >
        Save
      </Button>
      </Grid>
      </Grid>
    </Form>
  )}
</Formik>

  </Box>
</Modal>

    </Box>
  );
};

export default CreditCardTable;
