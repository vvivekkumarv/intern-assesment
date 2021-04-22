import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import CarouselContainer from "./components/CarouselContainer";
import Plan from "./components/Plan";
import Chap from "./components/Chap";
import Review from "./components/Review";
import Request from "./components/Request";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <About />
      <CarouselContainer />
      <Plan />
      <Chap />
      <Review />
      <Request />
      <Footer />
      
    </div>
  );
}

export default App;
