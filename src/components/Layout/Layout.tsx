import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { Box, styled } from "@mui/material";
import Footer from "../Footer/Footer";
interface Props {
  children?: ReactNode;
}

const LayoutWrapperStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  minHeight: "100vh",
  paddingBottom: theme.spacing(2),
}));

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapperStyled>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
    </LayoutWrapperStyled>
  );
};

export default Layout;
