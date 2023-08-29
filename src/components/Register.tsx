import React, { useState, useEffect } from "react";
import BounceLoader  from "react-spinners/BounceLoader";
import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, UserCredential } from "firebase/auth";
import Login from "./Login";
import logo from "../assets/images/Logo.jpg"

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data: UserCredential) => {
      setValue(data.user?.email || "");
      localStorage.setItem("email", data.user?.email || "");
    });
  };

  return (
    <Container maxWidth="sm">
    {loading ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust the height as needed
        }}
      >
        <BounceLoader color={"#385170"} loading={loading} size={50} />
      </Box>
    ) : (
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
        {value ? (
          <Login />
        ) : (
          <>
            <Avatar src={logo} alt="Reg " />
            <Typography sx={{ mt: 2, fontWeight: "600" }} variant="h6" color="primary">
              Hello Admin
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 3, mb: 2, borderRadius: "25px"  }}
              onClick={handleClick}
            >
              Sign In With Google
            </Button>
          </>
        )}
      </Box>
    )}
  </Container>
);
};

export default Register;
