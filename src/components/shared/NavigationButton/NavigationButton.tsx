import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type NavigationButtonProps = {
  children?: React.ReactNode;
  path: keyof typeof routes;
};
const NavigationButton = ({ path, children }: NavigationButtonProps) => {
  return (
    <Link to={path}>
      <Button variant="outlined">
        <Typography variant="subtitle1">{children}</Typography>
      </Button>
    </Link>
  );
};

export default NavigationButton;
