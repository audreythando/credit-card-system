import React, { useState, MouseEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "./CreditCard.css";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  MenuItem,
  Popover,
  Alert,
  Snackbar,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { blockedCountries, countries } from "../Data";


  interface CardDetails {
    number: string;
    name: string;
    expiry: string;
    cvc: string;
    country: string;
  }
  


interface CreditCardProps {
  onCardSubmit: (cardDetails: CardDetails) => void;
}

const CreditCard: React.FC<CreditCardProps> = ({ onCardSubmit }) => {
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    country: "",
  });


  const [, setFocus] = useState<"number" | "name" | "expiry" | "cvc" | "country" | undefined>(undefined);
  const [isBlockedCountry, setIsBlockedCountry] = useState<boolean>(false);
  const [countryMenuAnchorEl, setCountryMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("error");

  const handleCountryClick = (event: MouseEvent<HTMLElement>) => {
    setCountryMenuAnchorEl(event.currentTarget);
  };

  const handleInputFocus = (evt: ChangeEvent<HTMLInputElement>) => {
    setFocus(evt.target.name as "number" | "name" | "expiry" | "cvc" | "country");
  }

  const handleCountryClose = () => {
    setCountryMenuAnchorEl(null);
  };

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required("Card Number is required")
      .matches(/^\d{16}$/, "Card Number must be 16 digits"),
    name: Yup.string().required("Card Name is required"),
    expiry: Yup.string()
      .required("Expiration Date is required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid Expiration Date"),
    cvc: Yup.string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "CVV must be 3 digits"),
    country: Yup.string().required("Country is required"),
  });

  const handleButtonClick = () => {
    if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.country) {
        setAlertMessage("Please fill in all card details.");
        setAlertSeverity("error");
        setAlertOpen(true);
    } else if (blockedCountries.includes(cardDetails.country)) {
        setAlertMessage("Card submission is blocked for the selected country.");
        setAlertSeverity("error");
        setAlertOpen(true);
    } else {
      const storedCards = JSON.parse(localStorage.getItem("creditCards") || "[]") as CardDetails[];
      const cardExists = storedCards.some((storedCard) => storedCard.number === cardDetails.number);

      if (!cardExists) {
        localStorage.setItem(
          "creditCards",
          JSON.stringify([...storedCards, cardDetails])
        );

        onCardSubmit(cardDetails);
        setAlertMessage("Card submitted successfully.");
        setAlertSeverity("success");
        setAlertOpen(true);
        setIsBlockedCountry(false);
        setTimeout(() => {
            setAlertOpen(false);
            navigate("/table");
          }, 3000);
      } else {
        setAlertMessage("This card has already been captured.");
        setAlertSeverity("error");
        setAlertOpen(true);
      }
    }
  };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanedNumber = e.target.value.replace(/\D/g, "");
    if (cleanedNumber.length > 16) {
      alert("Card Number must be 16 digits");
    } else {
      const formattedNumber = cleanedNumber.replace(/(\d{4})/g, "$1 ").trim();
      setCardDetails((prevCardDetails) => ({ ...prevCardDetails, number: formattedNumber }));
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanedDate = e.target.value.replace(/\D/g, "");
    const formattedDate = cleanedDate.replace(/(\d{2})(\d{2})/, "$1/$2");

    setCardDetails((prevCardDetails) => ({ ...prevCardDetails, expiry: formattedDate }));
  };

  return (
    <Box>
        <Box>
        <Snackbar
        open={alertOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={() => setAlertOpen(false)}
      >
        <Alert
        variant="filled"
          severity={alertSeverity}
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
        </Box>
    <Container maxWidth="sm">
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          component={Paper}
          elevation={2}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
            borderRadius: "10px",
            backgroundColor: "transparent",
          }}
        >
          <Grid item xs={12}>
            <div className="rccs__card rccs__card--unknown">
              <Cards
                number={cardDetails.number}
                name={cardDetails.name}
                expiry={cardDetails.expiry}
                cvc={cardDetails.cvc}
              />
            </div>
          </Grid>

          <Formik
            initialValues={cardDetails}
            validationSchema={validationSchema}
            onSubmit={() => {}}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleNumberChange}
                      onFocus={handleInputFocus}
                      InputLabelProps={{ style: { color: "primary" } }}
                      style={{ borderRadius: "35px" }}
                    />
                    <ErrorMessage
                      name="number"
                      component="div"
                      className="error"
                      style={{ fontSize: "small", color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Card Name"
                      variant="outlined"
                      name="name"
                      value={cardDetails.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCardDetails({ ...cardDetails, name: e.target.value });
                      }}
                      onFocus={handleInputFocus}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                      style={{ fontSize: "small", color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Expiration Date"
                      variant="outlined"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleDateChange}
                      onFocus={handleInputFocus}
                    />
                    <ErrorMessage
                      name="expiry"
                      component="div"
                      className="error"
                      style={{ fontSize: "small", color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="CVC"
                      variant="outlined"
                      name="cvc"
                      value={cardDetails.cvc}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCardDetails({ ...cardDetails, cvc: e.target.value });
                      }}
                      onFocus={handleInputFocus}
                    />
                    <ErrorMessage
                      name="cvc"
                      component="div"
                      className="error"
                      style={{ fontSize: "small", color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Country"
                      variant="outlined"
                      name="country"
                      value={cardDetails.country}
                      onClick={handleCountryClick}
                      onFocus={handleInputFocus}
                      style={{ borderRadius: "35px" }}
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="error"
                      style={{ fontSize: "small", color: "red" }}
                    />
                    {isBlockedCountry && (
                      <Box
                        className="error"
                        style={{ fontSize: "small", color: "red" }}
                      >
                        Credit card submission is blocked for the selected
                        country.
                      </Box>
                    )}
                    <Popover
                      open={Boolean(countryMenuAnchorEl)}
                      anchorEl={countryMenuAnchorEl}
                      onClose={handleCountryClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Box
                        style={{
                          maxHeight: "200px",
                          overflowY: "scroll",
                          backgroundColor: "#001f3f",
                        }}
                      >
                        {countries.map((option, index) => (
                          <MenuItem
                            key={index}
                            value={option}
                            onClick={() => {
                              setCardDetails({ ...cardDetails, country: option });
                              handleCountryClose();
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Box>
                    </Popover>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 3, mb: 2 , borderRadius: "25px", backgroundColor:" #38598b" }}
                    disabled={isSubmitting || isBlockedCountry}
                    onClick={handleButtonClick}
                  >
                    Submit Card
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Container>
    </Box>
  );
};

export default CreditCard;
