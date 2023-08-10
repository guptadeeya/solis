import React from "react";
import "./css/About.css";
import cattleImage from "../../images/Carousal-1.png"; // Import your image
import Header from "../../containers/Header";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import Details from "../../containers/Details";

const AboutContent = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Details />

      <section className="about-content">
        <div className="about-text">
          <h2>हमारे बारे में</h2>
          <p>
          Solis कैटल फीड में, हम उच्चतम प्रदान करने के लिए समर्पित हैं|
            आपके स्वास्थ्य और उत्पादकता को सुनिश्चित करने के लिए गुणवत्तापूर्ण पशु आहार
            पशुधन| हमारे विशेषज्ञों की टीम उद्योग में काम कर रही है
            दशकों से, आपके मवेशियों को पोषण और देखभाल प्रदान की जा रही है।
          </p>
        </div>
        <div className="about-image">
          <img src={cattleImage} alt="Cattle" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutContent;
