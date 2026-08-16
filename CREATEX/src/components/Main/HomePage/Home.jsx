import Figures from "./Figuress/Figures";
import Hero from "./Hero/Hero";
import HomeVideo from "./HomeVideo/HomeVideo";
import News from "./Newss/News";
import OurServices from "./OurServices/OurServices";
import OurValues from "./OurValues/OurValues";
import Partners from "./Partners/Partners";
import QuestionForm from "./QuestionForm/QuestionForm";
import OurWork from "./OurWork/OurWork";

import RequestModal from "../RequestForm/RequestModal";

const Home = ({ setRequestMdl }) => {
  return (
    <>

      <Hero setRequestMdl={setRequestMdl} />
      <HomeVideo />
      <OurValues />
      <QuestionForm />
      <OurServices />
      <OurWork />
      <Partners />
      <Figures />
      <News />
    </>
  );
};

export default Home;
