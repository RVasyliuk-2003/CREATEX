import Home from "./HomePage/Home";
// AboutUs
import AboutUsHome from "./About Us/AboutUsHome/AboutUsHome";
import AboutUs from "./About Us/AboutUs/AboutUs";
import ServicesHome from "./Servicess/ServisesHomePage/ServicesHome";
import WorkHome from "./Work/WorkHome/WorkHome";
import NewsHome from "./Newss/NewsHome/NewsHome";

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
        <Route path="/WorkHome" element={<WorkHome />} />
        <Route path="/NewsHome" element={<NewsHome />} />
      </Routes>
    </main>
  );
};

export default Main;
