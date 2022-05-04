import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ViewsHolder } from "./components/ViewsHolder/ViewsHolder";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ViewsHolder />
      <Footer />
    </div>
  );
};
