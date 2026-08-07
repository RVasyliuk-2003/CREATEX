import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import "./reset.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        {/* <ContactForm /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
