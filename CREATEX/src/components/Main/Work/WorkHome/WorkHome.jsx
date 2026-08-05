import CatalogWork from "./CatalogWork/CatalogWork";
import OurClients from "./OurClients/OurClients";
import OurWork from "./OurWork/OurWork";
import ReviewPage from "./ReviewPage/ReviewPage";
import ContactForm from "../../../ContactForm/ContactForm";

const WorkHome = () => {
  return (
    <>
      <OurWork />
      <CatalogWork />
      <ReviewPage />
      <OurClients />
      <ContactForm />
    </>
  );
};

export default WorkHome;
