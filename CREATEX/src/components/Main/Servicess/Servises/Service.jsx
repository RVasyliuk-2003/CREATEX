import Offer from "./Offer/Offer";
import OurBenefits from "./OurBenefits/OurBenefits";
import OurProjects from "./OurProjects/OurProjects";
import Points from "./Points/Points";
import Pricing from "./Pricing/Pricing";
import ServiceHome from "./ServiceHome/ServiceHome";
import SupportedPr from "./SupportedPr/SupportedPr";
import ContactForm from "../../ContactForm/ContactForm";

const Service = () => {
  return (
    <>
      <ServiceHome />
      <Offer />
      <OurBenefits />
      <Points />
      <Pricing />
      <OurProjects />
      <SupportedPr />
      <ContactForm />
    </>
  );
};

export default Service;
