import React from "react";
/* import sbMerch from "../assets/sbMerch.png";
import productsArrow from "../assets/productsArrow.png";*/
import logo_worlds from "../assets/logoW23.png";
import arrowUpRight from "../assets/arrowUpRight.png";
import rp from "../assets/rp.webp";

function HomeCurrentEvent() {
  return (
    <div id="homeCurrentEventContainer">
      <div id="homeCurrentEventGrid">
        <div className="homeCurrentEventGridCell" data-cell="planning">
          En cours
        </div>
        <div className="homeCurrentEventGridCell" data-cell="worldPass">
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>WORLDS 2023 event pass</p>
            <p className="subText">
              start playing to unlock and claim rewards today!
            </p>
          </a>
        </div>

        <div className="homeCurrentEventGridCell" data-cell="featuredVideo">
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>BABLER'S NEW JUNGLE ROUTE</p>
            <p className="subText">THAT DOESN'T MAKE SENSE, BUT WORKS!</p>
          </a>
        </div>

        <div className="homeCurrentEventGridCell" data-cell="featuredGame">
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>SONG OF NUNU | YOU AND ME MAKES US</p>
            <p className="subText">
              WATCH YOU AND ME MAKES US MUSIC VIDEO FOR SONG OF NUNU: A LEAGUE
              OF LEGENDS STORY.
            </p>
          </a>
        </div>
        {/*  mid left */}
        <div
          className="homeCurrentEventGridCell"
          data-cell="carouselMiscellaneous"
          data-cell-type="middleRow"
        >
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>GODS FT. NEWjeans </p>
            <p className="subText">
              the official worlds music video and anthem for worlds 2023.
            </p>
          </a>
        </div>
        <div
          className="homeCurrentEventGridCell"
          data-cell="carouselSkins"
          data-cell-type="middleRow"
        >
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>coven akali</p>
            <p className="subText">
              <img src={rp} className="rpIcon" alt="RPicon"></img> 1820
            </p>
          </a>
        </div>
        <div
          className="homeCurrentEventGridCell"
          data-cell="worldsFormat"
          data-cell-type="middleRow"
        >
          <a
            href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
            target="_blank"
            rel="noreferrer"
          >
            <p>WORLDS 2023 FORMAT EXPLAINER</p>
            <p className="subText">
              a brand new format is here. Here,s everything you need to know.
            </p>
          </a>
        </div>

        <div className="homeCurrentEventGridCell" data-cell="footer">
          <img src={logo_worlds} alt="worldsLogo"></img>

          <div id="homeCurrentEventFooterLinks">
            <div>
              <a
                href="https://lolesports.com/vods/worlds/worlds_2022"
                target="_blank"
                rel="noreferrer"
              >
                <p>VOD</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/standings/worlds/worlds_2022/groups"
                target="_blank"
                rel="noreferrer"
              >
                <p>SCHEDULE</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/rewards?utm_source=LeagueClient&utm_medium=hub&utm_campaign=worlds_hub_2022"
                target="_blank"
                rel="noreferrer"
              >
                <p>STANDINGS</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/rewards?utm_source=LeagueClient&utm_medium=hub&utm_campaign=worlds_hub_2022"
                target="_blank"
                rel="noreferrer"
              >
                <p>WATCH WORLDS</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCurrentEvent;
