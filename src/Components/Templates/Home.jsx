import React, { Fragment } from "react";
import ScrollButton from "../Atoms/Button/ScrollButton";
import About from "../Organisms/About/About";
import Body from "../Organisms/Body/Body";
import Footer from "../Organisms/Footer/Footer";
import Header from "../Organisms/Header/Header";
import Slider from "../Organisms/Slider/Slider";
import Work from "../Organisms/Work/Work";

Home.propTypes = {};

function Home(props) {
  const { Data } = props;

  return (
    <Fragment>
      <Header />
      <Slider/>
      <About/>
      <Work/>
      <Body Data={Data} />
      <ScrollButton/>
      <Footer/>
    </Fragment>
  );
}

export default Home;
