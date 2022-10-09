import React from "react";
import { useLocation } from "react-router-dom";
import SubNavHome from "../components/SubNavHome";
import HomePreview from "../pages/HomePreview";
import HomePatchnote from "../pages/HomePatchnote";
import Clash from "../pages/Clash";
import HomeProducts from "./HomeProducts";

function Home() {
  let location = useLocation();
  console.log(location);
  return (
    <div id="homeContainer">
      <SubNavHome />
      {(() => {
        switch (location.pathname) {
          case "/home/currentEvent":
            return <Clash />;

          case "/home/preview":
            return <HomePreview />;

          case "/home/products":
            return <HomeProducts />;

          case "/home/patchnote":
            return <HomePatchnote />;

          default:
            return <HomePreview />;
        }
      })()}
    </div>
  );
}

export default Home;
