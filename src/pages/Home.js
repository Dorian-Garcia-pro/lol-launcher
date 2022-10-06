import React from "react";
import { useLocation } from "react-router-dom";
import SubNavHome from "../components/SubNavHome";
import HomePreview from "../pages/HomePreview";
import HomePatchnote from "../pages/HomePatchnote";

function Home() {
  let location = useLocation();
  console.log(location);
  return (
    <div id="homeContainer">
      <SubNavHome />
      {(() => {
        switch (location.pathname) {
          case "/home/currentEvent":
            return <HomePreview />;

          case "/home/preview":
            return <HomePreview />;

          case "/home/products":
            return <HomePreview />;

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
