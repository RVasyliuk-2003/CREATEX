import Home from "./HomePage/Home";
import AboutUsHome from "./About Us/AboutUsHome/AboutUsHome";
import ServiceHome from "./Servicess/Servises/ServiceHome/ServiceHome";
import WorkHome from "./Work/WorkHome/WorkHome";
import NewsHome from "./Newss/NewsHome/NewsHome";
import ContactHome from "./Contact/ContactHome";

const Main = () => {
  return (
    <main>
      <Home />
      <AboutUsHome />
      <ServiceHome />
      <WorkHome />
      <NewsHome />
      <ContactHome />
    </main>
  );
};

export default Main;
