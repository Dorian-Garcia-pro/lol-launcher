import React from "react";
/* import sbMerch from "../assets/sbMerch.png";
import productsArrow from "../assets/productsArrow.png";
import logo_worlds from "../assets/LOL_Worlds_logo.svg";
 */
function HomeCurrentEvent() {
  return (
    <div id="homeCurrentEventContainer">
      <div id="homeCurrentEventGrid">
        {/*  main */}
        <div id="sectionCurrentEvent7">
          <div id="homeCurrentEventGridMainHeader">
            <div>
              <p>((o))</p>
              <p>Actuellement en direct</p>
            </div>
            <div>série de 1</div>
          </div>
          <div id="homeCurrentEventGridMainBody">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/T1_logo.svg/640px-T1_logo.svg.png"
                alt="logoEDG"
              ></img>
              <span>T1</span>
              <p>SK Telecom T1</p>
            </div>
            <div id="homeCurrentEventGridMainBodyVS">
              <div>
                <p>VS</p>
              </div>
            </div>
            <div>
              <img
                src="https://logos-marques.com/wp-content/uploads/2021/03/Logo-Cloud-9.png"
                alt="logoEDG"
              ></img>
              <span>C9</span>
              <p>CLOUD 9</p>
            </div>
          </div>
          <div className="homeCurrentEventGridMainFooter">
            <div className="homeCurrentEventGridMainFooterPlayButton">▶</div>
            <div>REGARDER</div>
          </div>
        </div>
        {/*  top right */}
        <div id="sectionCurrentEvent6">
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>PICK 'EM (GROUPES)</p>
          </a>
        </div>
        {/*  mid left */}
        <div id="sectionCurrentEvent5">En cours</div>
        {/*  mid */}
        <div id="sectionCurrentEvent3">
          <div>
            <p>SYNDRA FLEUR SPIRITUELLE</p>
            <div>
              <span>RP</span>
              <p>1 350 RP</p>
            </div>
          </div>
        </div>
        {/*  mid right */}
        <div id="sectionCurrentEvent4">
          <div>
            <p>SORAKA FLEUR SPIRITUELLE</p>
            <div>
              <span>RP</span>
              <p>1 350 RP</p>
            </div>
          </div>
        </div>
        {/*  botttom right */}
        <div id="sectionCurrentEvent2">
          <div className="homeCurrentEventGridMainFooter">
            <div className="homeCurrentEventGridMainFooterPlayButton">▶</div>
            <div>VOIR LE BRACKET DU MONDIAL</div>
          </div>
        </div>
        {/*  bottom left */}
        <div id="sectionCurrentEvent1">
          <div className="homeCurrentEventGridMainFooter">
            <div className="homeCurrentEventGridMainFooterPlayButton">▶</div>
            <div>DECOUVRIR LE PASSE DU MONDIAL</div>
          </div>
        </div>

        <div id="homeCurrentEventFooter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="32"
            height="32"
            viewBox="0 0 425 425"
          >
            <path
              class="shape"
              fill="#FAFAFA"
              d="M94.73,94.85h94.12V47.37h-73c-37.83,0-68.49,30.74-68.49,68.66v73.17h47.37V94.85z M179.04,212.94     l-84.31,84.51v-60.77H47.37v141.83h141.49v-47.48h-60.63l84.31-84.52L179.04,212.94z M330.34,331.03h-94.12v47.48h73     c37.83,0,68.49-30.74,68.49-68.66v-73.17h-47.37V331.03z M236.22,47.37v47.48h60.63l-84.31,84.52l33.49,33.57l84.31-84.52v60.77     h47.37V47.37H236.22z"
            ></path>
          </svg>
          <div id="homeCurrentEventFooterLinks">
            <div>
              <a
                href="https://lolesports.com/vods/worlds/worlds_2022"
                target="_blank"
                rel="noreferrer"
              >
                <p>VOD</p>
                <p>-></p>
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/standings/worlds/worlds_2022/groups"
                target="_blank"
                rel="noreferrer"
              >
                <p>CLASSEMENT</p>
                <p>-></p>
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/rewards?utm_source=LeagueClient&utm_medium=hub&utm_campaign=worlds_hub_2022"
                target="_blank"
                rel="noreferrer"
              >
                <p>RECOMPENSES</p>
                <p>-></p>
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://static.lolesports.com/pickem/worldsDude.f8e7ca97c0.svg"
              height="46"
              width="46"
              alt="MONDIAL&nbsp;2022"
              class="d0d9c"
            ></img>
            <div>
              <p>22</p>
            </div>
          </div>
        </div>
      </div>
      <div id="homeCurrentEventPlanning">En cours</div>
    </div>
  );
}

export default HomeCurrentEvent;
