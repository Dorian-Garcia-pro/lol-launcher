import React from "react";
import sbMerch from "../assets/sbMerch.png";
import productsArrow from "../assets/productsArrow.png";
function HomeProducts() {
  return (
    <div id="homeProductsContainer">
      <div id="homeProductsGrid">
        <div id="div1" alt="gridproduct">
          <a
            href="https://merch.riotgames.com/fr-fr/collection/spirit-blossom-collection/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sbMerch} alt="gridproduct"></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <div id="mainSquareProducts">
              <span>FLEUR SPIRITUELLE REVIENT !</span>
              <span>
                De nouveaux produits dérivés Fleur spirituelle arrivent dans le
                monde des mortels !
              </span>
            </div>
          </a>
        </div>
        <div id="div2">
          <a
            href="https://merch.riotgames.com/fr-fr/product/sugarcone-furyhorn-sitting-plush/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt6c466c442969afb1/5f5944c44f76497207f34f5d/06-26-2020220426046_dsc04312_.jpg"
              alt="gridproduct"
            ></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Le Corgnon cône à sucre revient !</p>
          </a>
        </div>

        <div id="div3">
          <a
            href="https://merch.riotgames.com/fr-fr/product/project-team-minis-set-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltaa69eae2d7a2a3f7/5f59425e03448774bcc0b9c7/02-27-2019_2023_43_41_157_Team_20Minis-Group.png"
              alt="gridproduct"
            ></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Ensemble PROJET : Mini N°2</p>
          </a>
        </div>

        <div id="div4">
          <a
            href="https://merch.riotgames.com/fr-fr/product/corki-corgi-plush/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8e919272091b7ee/631a497cc9b2cd2d9d2a4253/2022_CorgiCorki_client_1920x1080_opt.jpg"
              alt="gridproduct"
            ></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <p>La peluche Corki corgi revient !</p>
          </a>
        </div>
        <div id="div5">
          <a
            href="https://merch.riotgames.com/fr-fr/product/infinity-zyra-statue/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.kyodai-et-aniki.com/Files/128685/Img/22/Zyra-league-of-legend-statue-infinity-studio-Kyodai-et-Aniki-5-zoom.jpg"
              alt="gridproduct"
            ></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Ce n'est pas juste une fleur.</p>
          </a>
        </div>
        <div id="div6">
          <a
            href="https://merch.riotgames.com/fr-fr/product/championship-leblanc-unlocked/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt7293d46bc020d6c5/6334d23f188544355479486e/2022_Promo_Worlds2022_C-Leblanc_Ecomm_image14.png?auto=webp&width=983&quality=85"
              alt="gridproduct"
            ></img>
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Feinte typique !</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
