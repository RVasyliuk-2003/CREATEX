import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import "./reset.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";

import RequestModal from "./components/Main/RequestForm/RequestModal";

const App = () => {
  const [requestMdl, setRequestMdl] = useState(false);

  return (
    <div className={styles.maxContainer}>
      {requestMdl && <RequestModal setRequestMdl={setRequestMdl} />}

      <Header />
      <Main setRequestMdl={setRequestMdl} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
