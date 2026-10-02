import Offer from "./Offer/Offer";
import OurBenefits from "./OurBenefits/OurBenefits";
import OurProjects from "./OurProjects/OurProjects";
import Points from "./Points/Points";
import Pricing from "./Pricing/Pricing";
import ServiceHome from "./ServiceHome/ServiceHome";
import SupportedPr from "./SupportedPr/SupportedPr";

const Service = () => {
  return (
    <>
      <ServiceHome />
      <Offer />
      <Points />
      <OurBenefits />
      <OurProjects />
      <Pricing />
      <SupportedPr />
    </>
  );
};

export default Service;
