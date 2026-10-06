// Home
import Home from "./HomePage/Home";

// AboutUs
import AboutUsHome from "./About Us/AboutUsHome/AboutUsHome";
import AboutUs from "./About Us/AboutUs/AboutUs";

// Service
import ServicesHome from "./Servicess/ServisesHomePage/ServicesHome";
import Service from "./Servicess/Servises/Service";

// Work
import WorkHome from "./Work/WorkHome/WorkHome";
import Work from "./Work/Work/Work";

// News
import NewsHome from "./Newss/NewsHome/NewsHome";

// Contact
import ContactHome from "./Contact/ContactHome";

import { Routes, Route } from "react-router-dom";

const Main = ({ setRequestMdl }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setRequestMdl={setRequestMdl} />} />
        {/* // AboutUs */}
        <Route path="/AboutUsHome" element={<AboutUsHome />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/ServicesHome" element={<ServicesHome />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/WorkHome" element={<WorkHome />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/NewsHome" element={<NewsHome />} />
        <Route path="/ContactHome" element={<ContactHome />} />
      </Routes>
    </main>
  );
};

export default Main;
