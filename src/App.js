import "./App.css";
import "../src/sass/style.css";
import Socials from "./components/Socials";
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
          <Route path="/" element={<Navigate to="/home/currentEvent" />} />
          <Route path="/home" element={<Navigate to="/home/currentEvent" />} />
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
        <Socials />
      </div>

      <div id="mobileMode">
        <img
          src="https://img-19.ccm2.net/oVNTiC26HYCOJDvvrTeVJTFinkk=/330x330/7f2127524d3d4730bd1cb369f8f20618/auth-avatar/Ccm4BzsqZ"
          alt=""
        />
        <p>Sorry, this launcher is desktop only</p>
      </div>
    </div>
  );
}

export default App;
