import Home from "./HomePage/Home";
import AboutUsHome from "./About Us/AboutUsHome/AboutUsHome";
import ServiceHome from "./Servicess/Servises/ServiceHome/ServiceHome";
import WorkHome from "./Work/WorkHome/WorkHome";
import NewsHome from "./Newss/NewsHome/NewsHome";

import { Routes, Route } from "react-router-dom";

const Main = ({ setRequestMdl }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setRequestMdl={setRequestMdl} />} />
        <Route path="/AboutUsHome" element={<AboutUsHome />} />
        <Route path="/services" element={<ServiceHome />} />
        <Route path="/WorkHome" element={<WorkHome />} />
        <Route path="/NewsHome" element={<NewsHome />} />
      </Routes>
    </main>
  );
};

export default Main;
