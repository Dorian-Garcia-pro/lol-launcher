import React from "react";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";

function HomePatchnote() {
  return (
    <div id="homePatchnoteContainer">
      <div id="titleBannerPatchnote">
        <h1>NOTES DE PATCH 12.19</h1>
        <div id="homePatchnoteAuthorSocials">
          <span>RIOT RIRU - HIER</span>
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
          " Des buffs pour Blitzcrank combattant ? Des buffs pour Rakan AP ?
          <br></br>
          <br></br>
          Est-ce un rêve, ou est-ce le patch 12.19 ? Dans ce patch, nous offrons
          une mise à jour de moyenne ampleur à Syndra. N'oubliez aucun
          paragraphe pour en apprendre plus sur ses compétences améliorées ou
          ajustées ! Ce patch comprend également quelques buffs pour des builds
          hors méta et la mise à jour visuelle de Janna qui va faire souffler un
          vent nouveau sur la Faille. Vous découvrirez aussi ci-dessous des
          informations sur le nouveau système de passe d'événement amélioré.
          Merci de nous avoir lus, et à bientôt dans la Faille ! "
        </p>
        <div className="authorsLegacy">
          <span>LILU « RIOT RIRU » CABREROS</span>
          <span>PAUL « RIOTAETHER » PERSCHEID</span>
        </div>
      </section>
      <section id="tempsForts">
        <h1>TEMPS FORTS DU PATCH</h1>
        <img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7a0027856886e94f/633c0ab85e9a09115c79aab8/LOL_12.19_PatchNotes-Infographic-_1920x1080_Aveiger_v02_FR.jpg"
          alt="patch"
        />
        <p>
          Aphelios fleur spirituelle, Darius fleur spirituelle, Evelynn fleur
          spirituelle, Maître Yi fleur spirituelle, Sett fleur spirituelle,
          Soraka fleur spirituelle, Syndra fleur spirituelle, Tristana fleur
          spirituelle, Yorick fleur spirituelle et Maître Yi fleur spirituelle
          prestige seront disponibles à partir du 6 octobre 2022.
        </p>
      </section>
    </div>
  );
}

export default HomePatchnote;
