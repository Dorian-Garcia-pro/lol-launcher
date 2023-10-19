import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import bag from "../assets/bag.png";
import hammer from "../assets/hammer.png";
import coins from "../assets/coins.png";
import lolIcon from "../assets/lol_icon.png";
import cog from "../assets/cog.png";
import close from "../assets/close.png";
import rp from "../assets/rp.webp";
import be from "../assets/be.webp";

const MainNav = () => {
  const [statusPLayer, setStatusPLayer] = useState(true);

  return (
    <div id="mainNavContainer">
      <div id="leftNavPlayHome">
        <div id="playLogo">
          <div id="playLogoL">
            <img src={lolIcon} alt="user" />
          </div>
          <div id="playLogoPlay">PLAY</div>
        </div>
        <div id="maintenanceLogo"> !</div>
        <nav id="homeTftClash">
          <ol>
            <NavLink className="mainNavLink" to="/home">
              <li>HOME</li>
            </NavLink>
            <NavLink className="mainNavLink" to="/tft">
              <li>TFT</li>
            </NavLink>
            <NavLink className="mainNavLink" to="/clash">
              <li>CLASH</li>
            </NavLink>
          </ol>
        </nav>
      </div>
      <div id="rightProfilInvLootShopCurrencies">
        <nav id="rightProfilInvLootShop">
          <ol>
            <NavLink className="mainNavLink" to="/user">
              <li>
                <img src={user} alt="user" />
              </li>
            </NavLink>
            <NavLink className="mainNavLink" to="/inventory">
              <li>
                <img src={bag} alt="bag" />
              </li>
            </NavLink>
            <NavLink className="mainNavLink" to="/forge">
              <li>
                <img src={hammer} alt="hammer" />
              </li>
            </NavLink>
            <NavLink className="mainNavLink" to="/shop">
              <li>
                <img src={coins} alt="coins" />
              </li>
            </NavLink>
          </ol>
        </nav>
        <div id="NavSpacerCurrencies"></div>
        <div id="NavCurrencies">
          <div className="navCurrenciesCol" id="navCurrenciesIcons">
            <p id="RPicon">
              <img src={rp} className="rpIcon" alt="RPicon"></img>
            </p>
            <p id="BEicon">
              <img src={be} className="beIcon" alt="beIcon"></img>
            </p>
          </div>
          <div className="navCurrenciesCol" id="navCurrenciesValue">
            <p className="navValueCurrency">166</p>
            <p className="navValueCurrency">16104</p>
          </div>
        </div>
      </div>
      <div id="ppNameStatusClose">
        <div id="navPPlevelsContainer">
          <div id="navPP">
            <img
              src="https://preview.redd.it/k1pgg6ilqus41.jpg?auto=webp&s=66b8f592ae429e1922df1b86e345d7aff9603248"
              alt="ppUser"
            />
          </div>
          <div id="navPPlevels">158</div>
        </div>

        <div id="navNicknameStatus">
          <div id="navNickame">Daz</div>
          <div id="navStatus">
            <div
              id="navStatusCircle"
              className={statusPLayer ? "" : "playerBusy"}
              onClick={() => setStatusPLayer((prev) => !prev)}
            ></div>
            <div
              id="navStatusText"
              className={statusPLayer ? "" : "playerBusy"}
            >
              {statusPLayer ? "Online" : "Away"}
            </div>
          </div>
        </div>
        <div id="navPPcloseButtons">
          <div className="navPPcloseButton">?</div>
          <div className="navPPcloseButton">_</div>
          <div className="navPPcloseButton">
            <img src={cog} alt="cogwheel" />
          </div>
          <div className="navPPcloseButton">
            <img src={close} alt="cogwheel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
