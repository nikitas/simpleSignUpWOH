import React from "react";
import { Button, Box, styled, Typography } from "@mui/material";

const HeaderStyled = styled(Box)(({theme}) => ({
  position: "static",
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: '67px',
  background: theme.palette.common.black,
  alignItems: 'center',
}));

const Header = () => {
  return (
      <HeaderStyled>
        <img
          src="src/assets/images/WorldHaikuLogo.png"
          alt="Logo"
          style={{ marginRight: "auto" }}
        />
        <Button variant="outlined"><Typography variant="subtitle1">Login</Typography></Button>
      </HeaderStyled>
  );
};

export default Header;
