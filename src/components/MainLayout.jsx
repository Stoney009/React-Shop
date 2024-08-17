import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <Container>
      <Toaster/> 
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
