import "./App.css";
import "../src/css/style.css";
import Socials from "./components/Socials";
import SocialsFooter from "./components/SocialsFooter";
import MainNav from "./components/MainNav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <MainNav />
      <div id="bodyApp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Home />} />
        </Routes>
        <div id="socialsCol">
          <Socials />
          <SocialsFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
