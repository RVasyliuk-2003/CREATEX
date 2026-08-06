import Comments from "./Comments/Comments";
import HowNews from "./HowNews/HowNews";
import InfoPage from "./InfoPage/InfoPage";
import YourCommentForm from "./YourCommentForm/YourCommentForm";

const News = () => {
  return (
    <>
      <InfoPage />
      <HowNews />
      <Comments />
      <YourCommentForm />

    </>
  );
};

export default News;
