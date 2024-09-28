import React from "react";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <Works />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;
