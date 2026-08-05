import Figures from "./Figuress/Figures";
import Hero from "./Hero/Hero";
import HomeVideo from "./HomeVideo/HomeVideo";
import News from "./Newss/News";
import OurServices from "./OurServices/OurServices";
import OurValues from "./OurValues/OurValues";
import Partners from "./Partners/Partners";

import Header from "../../Header/Header";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeVideo />
      <OurValues />
      <OurServices />
      <Partners />
      <Figures />
      <News />
      <ContactForm />
      
    </>
  );
};

export default Home;
