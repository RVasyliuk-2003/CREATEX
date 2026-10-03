import CatalogWork from "./CatalogWork/CatalogWork.jsx";
import OurClients from "./OurClients/OurClients";
import OurWork from "./OurWork/OurWork";
import ReviewPage from "./ReviewPage/ReviewPage";

const WorkHome = () => {
  return (
    <>
      <OurWork />
      <CatalogWork />
      <OurClients />
      <ReviewPage />
    </>
  );
};

export default WorkHome;
