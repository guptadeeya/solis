import React from "react";
import Navbar from "../../containers/Navbar";
import Header from "../../containers/Header";
import Details from "../../containers/Details";
import Items from "../../components/Home/Items";
import Carousal from "../../components/Home/Carousal";
import Categories from "../../components/Home/Categories";
import Features from "../../components/Home/Features"
import Footer from '../../containers/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
      <Items />
      <Carousal />
      <Categories />
      <Features/>
      <Footer />
    </div>
  );
};

export default Home;
