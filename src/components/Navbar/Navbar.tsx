import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/images/Logo.jpg";
import { Avatar, List, ListItem, ListItemText, Drawer, Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer


  const handleCreditCardsTable = () => {
    navigate("/table");
    handleClose();
  };
  const handleCreditCards = () => {
    navigate("/credit-card");
    handleClose();
  };

  const logout = () => {
    navigate("/");
    handleClose();
  };

  const menuIconRef = useRef(null);
  const barbieAvatarRef = useRef(null);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleAvatarClick = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const handleClose = () => {
    setTooltipOpen(false);
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    
    if (tooltipOpen) {
      timer = setTimeout(() => {
        handleClose();
      }, 3000); // Close Tooltip after 3 seconds if nothing is clicked
    }

    return () => {
      clearTimeout(timer);
    };
  }, [tooltipOpen]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: "#a7bcb9", backgroundColor: "#081f37" }}>
        <Toolbar>
          <Avatar src={logo} alt="Reg" sx={{ width: 25, height: 25, lineHeight: "50%" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: 25, height: 25, lineHeight: "30px", marginLeft: "10px" }}>
            CREDIT CARD SYSTEM
          </Typography>
          {/* Toggle drawer when menu icon is clicked */}
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
            ref={menuIconRef}
          >
            <MenuIcon />
          </IconButton>
          {/* Avatar with Tooltip */}
          <Tooltip
            open={tooltipOpen}
            onClose={handleClose}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <List sx={{ backgroundColor: "#081f37", width: "150px" }}>
                <ListItem onClick={handleCreditCardsTable}>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem onClick={logout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            }
            placement="bottom-end"
            arrow
          >
            <Avatar
              ref={barbieAvatarRef}
              className="barbie"
              color="inherit"
              onClick={handleAvatarClick}
              sx={{ width: 25, height: 25, marginRight: "10px" }}
            />
          </Tooltip>
        </Toolbar>
        {/* Drawer for mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          className="drawer-background"
        >
          <List sx={{ backgroundColor: "#081f37", height: "100vh" }}>
            <ListItem onClick={logout}>
              <ListItemText primary="Home " />
            </ListItem>
            <ListItem onClick={handleCreditCards}>
              <ListItemText primary="Credit Cards " />
            </ListItem>
            <ListItem onClick={handleCreditCardsTable}>
              <ListItemText primary="Credit Cards Table" />
            </ListItem>
            <ListItem onClick={logout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}


