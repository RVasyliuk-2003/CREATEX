import CatalogWork from "./CatalogWork/CatalogWork";
import OurClients from "./OurClients/OurClients";
import OurWork from "./OurWork/OurWork";
import ReviewPage from "./ReviewPage/ReviewPage";

const WorkHome = () => {
  return (
    <>
      <OurWork />
      <CatalogWork />
      <ReviewPage />
      <OurClients />

    </>
  );
};

export default WorkHome;
