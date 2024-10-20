import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./assets/styles/custom.scss";
import AppRoute from "./AppRoute";
import Navbar from "./components/Navbar";
import SubLayoultBG from "./components/SubLayoutBG";
import LayoultBG from "./components/LayoutBG";

const App = () => {
  return (
    <Router>
      <LayoultBG>
        <Navbar />
        <SubLayoultBG>
          <AppRoute />
        </SubLayoultBG>
      </LayoultBG>
    </Router>
  );
};

export default App;
