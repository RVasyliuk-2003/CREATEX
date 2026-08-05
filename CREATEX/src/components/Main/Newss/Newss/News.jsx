import Comments from "./Comments/Comments";
import HowNews from "./HowNews/HowNews";
import InfoPage from "./InfoPage/InfoPage";
import YourCommentForm from "./YourCommentForm/YourCommentForm";
import ContactForm from "../../ContactForm/ContactForm";

const News = () => {
  return (
    <>
      <InfoPage />
      <HowNews />
      <Comments />
      <YourCommentForm />
      <ContactForm/>
    </>
  );
};

export default News;
