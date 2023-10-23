import { useState } from "react";
/* import sbMerch from "../assets/sbMerch.png";
import productsArrow from "../assets/productsArrow.png";*/
import logo_worlds from "../assets/logoW23.png";
import arrowUpRight from "../assets/arrowUpRight.png";
import rp from "../assets/rp.webp";

function HomeCurrentEvent() {
  /*   const teams = [
    {
      name: "PSG",
      logo: "https://upload.wikimedia.org/wikipedia/fr/2/25/PSG_Talon_logo.png",
    },
    {
      name: "BDS",
      logo: "https://factorassets.global.ssl.fastly.net/teamlogo/esports:team:fa7c17c9-f304-46ca-aad2-10e6ba3d2191/latest.png",
    },
    {
      name: "LLL",
      logo: "https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLogo-LOUD-Esports_Original.png",
    },
    {
      name: "GAM",
      logo: "https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png",
    },
    {
      name: "DFM",
      logo: "https://ssb.wiki.gallery/images/thumb/9/99/DetonatioN_FocusMe.png/250px-DetonatioN_FocusMe.png",
    },
    {
      name: "T1",
      logo: "https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/67b9ee0c-7ccf-4cfd-8581-c50d5f62384a/T1_Logo_Primary+Red.png",
    },
    {
      name: "TL",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Team_Liquid.svg/800px-Team_Liquid.svg.png",
    },
    {
      name: "C9",
      logo: "https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820065346_cloud9-2021-worlds.png",
    },
    {
      name: "MAD",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/84/MAD_Lions_logo.svg/langfr-260px-MAD_Lions_logo.svg.png",
    },
  ]; */

  const matchList = [
    {
      day: "",
      hour: "",
      bo: "5",
      team1: {
        name: "PSG",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/25/PSG_Talon_logo.png",
        score: "2",
      },
      team2: {
        name: "BDS",
        logo: "https://factorassets.global.ssl.fastly.net/teamlogo/esports:team:fa7c17c9-f304-46ca-aad2-10e6ba3d2191/latest.png",
        score: "3",
      },
      stage: "playin",
    },
    {
      day: "",
      hour: "",
      bo: "3",
      team1: {
        name: "LLL",
        logo: "https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLogo-LOUD-Esports_Original.png",
        score: "2",
      },
      team2: {
        name: "GAM",
        logo: "https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png",
        score: "0",
      },
      score: "0",
      stage: "playin",
    },
    {
      day: "",
      hour: "",
      bo: "3",
      team1: {
        name: "DFM",
        logo: "https://ssb.wiki.gallery/images/thumb/9/99/DetonatioN_FocusMe.png/250px-DetonatioN_FocusMe.png",
        score: "0",
      },
      team2: {
        name: "BDS",
        logo: "https://factorassets.global.ssl.fastly.net/teamlogo/esports:team:fa7c17c9-f304-46ca-aad2-10e6ba3d2191/latest.png",
        score: "2",
      },
      score: "0",
      stage: "playin",
    },
    {
      bo: "1",
      team1: {
        name: "T1",
        logo: "https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/67b9ee0c-7ccf-4cfd-8581-c50d5f62384a/T1_Logo_Primary+Red.png",
        score: "2",
      },
      team2: {
        name: "TL",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Team_Liquid.svg/800px-Team_Liquid.svg.png",
        score: "0",
      },
      score: "0",
      stage: "swiss",
    },
    {
      bo: "1",
      team1: {
        name: "C9",
        logo: "https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820065346_cloud9-2021-worlds.png",
        score: "2",
      },
      team2: {
        name: "MAD",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/84/MAD_Lions_logo.svg/langfr-260px-MAD_Lions_logo.svg.png",
        score: "0",
      },
      score: "0",
      stage: "swiss",
    },
    {
      day: "10/26",
      hour: "9:00 AM",
      bo: "1",
      team1: {
        name: "GEN",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Gen.G_logo.png",
        score: "2",
      },
      team2: {
        name: "GAM",
        logo: "https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png",
        score: "0",
      },
      score: "0",
      stage: "swiss",
    },
    {
      day: "11/2",
      hour: "9:00 AM",
      bo: "5",
      team1: { name: "???", logo: "rp", score: "" },
      team2: { name: "???", logo: "rp", score: "" },
      score: "0",
      stage: "knockout",
    },
    {
      day: "11/3",
      hour: "9:00 AM",
      bo: "5",
      team1: { name: "???", logo: rp, score: "" },
      team2: { name: "???", logo: rp, score: "" },
      score: "0",
      stage: "knockout",
    },
    {
      day: "11/4",
      hour: "9:00 AM",
      bo: "5",
      team1: { name: "???", logo: rp, score: "" },
      team2: { name: "???", logo: rp, score: "" },
      score: "0",
      stage: "knockout",
    },
  ];

  const planningCell = (match, index) => {
    return (
      <div key={index} className="planningCell">
        <div className="dateAndboType">
          <p>
            {match.day ? (
              <>
                {match.day} - {match.hour}
              </>
            ) : null}
          </p>
          <p className="BOtype">BEST OF {match.bo}</p>
        </div>
        <div className="logoTeamScoreContainer">
          <div className="logoTeamScore">
            {match.team1.name === "???" ? (
              <div className="logoTeam">
                <img src={rp} alt="teamlogo" style={{ opacity: 0 }} />
                <p>{match.team1.name}</p>
              </div>
            ) : (
              <div className="logoTeam">
                <img src={match.team1.logo} alt="teamlogo" />
                <p>{match.team1.name}</p>
              </div>
            )}
            <div className="score">
              {spoilers && match.team1.score
                ? match.team1.score
                : match.team1.score !== ""
                ? "X"
                : ""}
            </div>
          </div>
          <div className="logoTeamScore">
            {match.team2.name === "???" ? (
              <div className="logoTeam">
                <img src={rp} alt="teamlogo" style={{ opacity: 0 }} />
                <p>{match.team2.name}</p>
              </div>
            ) : (
              <div className="logoTeam">
                <img src={match.team2.logo} alt="teamlogo" />
                <p>{match.team2.name}</p>
              </div>
            )}
            <div className="score">
              {spoilers && match.team2.score
                ? match.team2.score
                : match.team2.score !== ""
                ? "X"
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [spoilers, setSpoilers] = useState(false);
  return (
    <div id="homeCurrentEventContainer">
      <div id="homeCurrentEventGrid">
        <div className="homeCurrentEventGridCell" data-cell="planning">
          <header>
            <div
              className="toggleSpoilers"
              onClick={() => setSpoilers((spoilers) => (spoilers = !spoilers))}
            >
              <p>SHOW ALL SPOILERS</p>
              <div className="btnToggleSpoilers" data-toggle={spoilers}>
                <span></span>
              </div>
            </div>
            <div className="stageCategory">
              <p>PLAY-IN STAGE</p>
            </div>
          </header>
          <main>
            {matchList
              .filter((match) => match.stage === "playin")
              .map((match, index) => {
                return planningCell(match, index);
              })}
            <div className="stageCategory">
              <p>SWISS STAGE</p>
            </div>
            {matchList
              .filter((match) => match.stage === "swiss")
              .map((match, index) => {
                return planningCell(match, index);
              })}
            <div className="stageCategory">
              <p>KNOCKOUT STAGE</p>
            </div>
            {matchList
              .filter((match) => match.stage === "knockout")
              .map((match, index) => {
                return planningCell(match, index);
              })}
          </main>
          <footer>
            <a
              href="https://pickem.lolesports.com/pickem/worlds/picks/5161996649521796696"
              target="_blank"
              rel="noreferrer"
            >
              VIEW STANDINGS <img src={arrowUpRight} alt="right--v1" />
            </a>
          </footer>
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
            href="https://www.youtube.com/watch?v=bEXpV89dqFY&embeds_widget_referrer=leagueclient&embeds_referring_euri=https%3A%2F%2F127.0.0.1%3A51686%2Findex.html"
            target="_blank"
            rel="noreferrer"
          >
            <p>BLABER'S NEW JUNGLE ROUTE</p>
            <p className="subText">THAT DOESN'T MAKE SENSE, BUT WORKS!</p>
            <img
              src="https://img.icons8.com/ios-filled/50/play--v1.png"
              alt="play--v1"
            />
          </a>
        </div>

        <div className="homeCurrentEventGridCell" data-cell="featuredGame">
          <a
            href="https://www.youtube.com/watch?v=uSkr4NzTIXg&embeds_widget_referrer=leagueclient&embeds_referring_euri=https%3A%2F%2F127.0.0.1%3A51686%2Findex.html"
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
            href="https://www.youtube.com/watch?v=C3GouGa0noM&embeds_widget_referrer=leagueclient&embeds_referring_euri=https%3A%2F%2F127.0.0.1%3A51686%2Findex.html"
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
            href="https://preview.redd.it/coven-akali-splash-art-v0-qsmc0mdqhmqb1.png?auto=webp&s=9902fff3d2d24431161ad920c0186f8e566cd4af"
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
            href="https://lolesports.com/article/worlds-2023-primer/blte9ec68c4b4f441fc"
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
                href="https://lolesports.com/vods/worlds/worlds_2023"
                target="_blank"
                rel="noreferrer"
              >
                <p>VOD</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/schedule?leagues=worlds"
                target="_blank"
                rel="noreferrer"
              >
                <p>SCHEDULE</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/standings/worlds/worlds_2023/swiss"
                target="_blank"
                rel="noreferrer"
              >
                <p>STANDINGS</p>
                <img src={arrowUpRight} alt="right--v1" />
              </a>
            </div>
            <div>
              <a
                href="https://lolesports.com/rewards"
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
