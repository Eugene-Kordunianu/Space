import { StrictMode } from "react";

import { ContextProvider } from "../context/context.js";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
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
