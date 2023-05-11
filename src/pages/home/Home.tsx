import NavigationButton from "@/components/shared/NavigationButton/NavigationButton";
import { routes } from "@/routes";
import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexFlow: 'column', alignItems: 'center', mt: 12}}>
      <Typography sx={{ pb: 2 }} variant="h2">
        Home page
      </Typography>
      <NavigationButton path={routes.signup}>Go to signup</NavigationButton>
    </Box>
  );
};

export default Home;
