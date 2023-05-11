import React from "react";
import {
  Box,
  styled,
  Typography,
} from "@mui/material";

const FooterStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  height: "115px",
  background: theme.palette.common.black,
  alignItems: "center",
  width: "100%",
}));

const OrSpacerStyled = styled(Box)(({ theme }) => ({
  width: "2px",
  height: "22px",
  margin: "0 12px",
  background: theme.palette.common.white,
}));

const Footer = () => {
  return (
    <FooterStyled>
      <Box sx={{ flex: 1, width: "430px" }}>
        <Box sx={{ width: "180px" }}>
          <Typography variant="body1">
            Copyright © 2023 World of Haiku All rights reserved
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 0.5 }}>
          <Typography variant="body2">Privacy Policy</Typography>
          <OrSpacerStyled />
          <Typography variant="body2">Terms of Service</Typography>
          <OrSpacerStyled />
          <Typography variant="body2">Knowladge Base</Typography>
        </Box>
        <Box>Patent No. 11,265,343</Box>
      </Box>
      <Box sx={{ display: "flex", mt: 0.5 }}>
        <img
          src="src/assets/images/WorldHaikuLogo.png"
          alt="Logo"
          style={{ marginRight: "auto" }}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", marginLeft: "auto" }}>
        <img
          src="src/assets/images/social.png"
          alt="social"
          style={{ maxWidth: "295px", marginLeft: "auto" }}
        />
      </Box>
    </FooterStyled>
  );
};

export default Footer;
