import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const formData: FormData = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: FormData, { setSubmitting }: any) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setSubmitting(false);
      navigate("/credit-card");
    } catch (error) {
      console.error("Validation error:", error);
      setSubmitting(false);
      alert("Validation failed. Please check your inputs.");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
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
            "linear-gradient(to bottom right, #385170,#142d4c,  #38598b)",
            borderRadius: "10px",
            backgroundColor: "transparent",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
          <Typography variant="h5" color="primary">
            Login
          </Typography>
          <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }: any) => (
              <Form style={{ width: "100%", marginTop: "1rem" }}>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                  style={{ fontSize: "small", color: "red" }}
                />

                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  color="primary"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                  style={{ fontSize: "small", color: "red" }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 3, mb: 2, borderRadius: "25px"  }}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;
