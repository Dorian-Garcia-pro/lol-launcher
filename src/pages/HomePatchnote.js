import React from "react";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";

function HomePatchnote() {
  return (
    <div id="homePatchnoteContainer">
      <div id="titleBannerPatchnote">
        <h1>PATCH NOTE 12.19</h1>
        <div id="homePatchnoteAuthorSocials">
          <span>RIOT RIRU - A long time ago</span>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.leagueoflegends.com%2Ffr-fr%2Fnews%2Fgame-updates%2Fpatch-12-19-notes%2F"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="fb" src={fb}></img>
          </a>

          <a
            href="https://twitter.com/intent/tweet?text=Notes%20de%20patch%2012.19%20%7C%20League%20of%20Legends&url=https%3A%2F%2Fwww.leagueoflegends.com%2Ffr-fr%2Fnews%2Fgame-updates%2Fpatch-12-19-notes%2F"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="twitter" src={twitter}></img>
          </a>
        </div>
      </div>
      <section>
        <p className="patchSummaryLegacy">
          "Buffs for Fighter Blitzcrank? Buffs for AP Rakan?
          <br></br>
          <br></br>
          Is it a dream, or is it Patch 12.19? In this patch, we are providing a
          moderate update to Syndra. Don't miss any paragraph to learn more
          about her improved or adjusted abilities! This patch also includes
          some buffs for off-meta builds and the visual update of Janna, which
          will bring a breath of fresh air to the Rift. Below, you will also
          find information about the new and improved event pass system. Thank
          you for reading, and see you soon on the Rift!"
        </p>
        <div className="authorsLegacy">
          <span>LILU « RIOT RIRU » CABREROS</span>
          <span>PAUL « RIOTAETHER » PERSCHEID</span>
        </div>
      </section>
      <section id="tempsForts">
        <h1>HIGHLIGHTS</h1>
        <img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7a0027856886e94f/633c0ab85e9a09115c79aab8/LOL_12.19_PatchNotes-Infographic-_1920x1080_Aveiger_v02_FR.jpg"
          alt="patch"
        />
        <p>
          Aphelios Spirit Blossom, Darius Spirit Blossom, Evelynn Spirit
          Blossom, Master Yi Spirit Blossom, Sett Spirit Blossom, Soraka Spirit
          Blossom, Syndra Spirit Blossom, Tristana Spirit Blossom, Yorick Spirit
          Blossom, and Master Yi Spirit Blossom Prestige will be available
          starting from October 6, 2022
        </p>
      </section>
    </div>
  );
}

export default HomePatchnote;
