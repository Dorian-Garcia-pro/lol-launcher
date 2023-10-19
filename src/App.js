import "./App.css";
import "../src/sass/style.css";
import Socials from "./components/Socials";
import SocialsFooter from "./components/SocialsFooter";
import MainNav from "./components/MainNav";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TFT from "./pages/TFT";
import Clash from "./pages/Clash";
/* import SubNavHome from "./components/SubNavHome"; */

function App() {
  return (
    <div className="App">
      <MainNav />
      <div id="bodyApp">
        <Routes>
          <Route path="/" element={<Navigate to="/home/preview" />} />
          <Route path="/home" element={<Navigate to="/home/preview" />} />
          <Route path="/home" element={<Home />}>
            <Route path="currentEvent" element={<Home />} />
            <Route path="preview" element={<Home />} />
            <Route path="products" element={<Home />} />
            <Route path="patchnote" element={<Home />} />
          </Route>
          <Route path="/tft" element={<TFT />} />
          <Route path="/clash" element={<Clash />} />
          <Route path="/user" element={<Clash />} />
          <Route path="/inventory" element={<Clash />} />
          <Route path="/forge" element={<Clash />} />
          <Route path="/shop" element={<Clash />} />
          <Route path="*" element={<Home to="/home" />} />
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
