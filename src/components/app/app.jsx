import { StrictMode } from "react";

import { ContextProvider } from "../context/context.js";
import Footer from "../footer/index.js";
import Header from "../header/index.js";
import Main from "../main/index.js";
import "./app.css";
const App = () => {
  return (
    <StrictMode>
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </StrictMode>
  );
};

export default App;
