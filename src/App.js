import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ViewsHolder } from "./components/ViewsHolder/ViewsHolder";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollTop/ScrollTop";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ViewsHolder />
      </Router>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
