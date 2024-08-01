import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import Container from "./components/Container";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <Container>
      <Header />
      <CategorySection />
      <ProductSection/>
      <Footer />
    </Container>
  );
};

export default App;
