import React from "react";
import sbMerch from "../assets/sbMerch.png";
import productsArrow from "../assets/productsArrow.png";
function HomeProducts() {
  return (
    <div id="homeProductsContainer">
      <div id="homeProductsGrid">
        {/*           VINYL           */}
        <div className="productCell" id="product1" alt="gridproduct">
          <a
            href="https://www.iam8bit.com/products/league-of-legends-worlds-anthems-vol-1-2014-2023-vinyl-soundtrack-spotify-fans-first-exclusive?ls=50TApOvd2ruQ6CycisZiA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <div id="mainSquareProducts">
              <span>VINYL: 10 YEARS OF WORLDS ANTHEMS</span>
              <span>
                Celebrating a decade of Worlds Anthems with compilation of all
                10 iconic songs on vinyl.
              </span>
            </div>
          </a>
        </div>
        {/*           spirit fox plush           */}
        <div className="productCell" id="product2">
          <a
            href="https://merch.riotgames.com/en-gb/product/spirit-blossom-ahri-fox-plush/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Spirit Blossom Ahri Fox Plus</p>
          </a>
        </div>
        {/*          baron figure           */}
        <div className="productCell" id="product3">
          <a
            href="https://merch.riotgames.com/en-gb/product/championship-baron-figure/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Championship Baron Figure</p>
          </a>
        </div>
        {/*          corgi corki          */}
        <div className="productCell" id="product4">
          <a
            href="https://merch.riotgames.com/en-gb/product/2023-worlds-unlocked-digital-edition/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <p>2023 Worlds Unlocked Digital</p>
          </a>
        </div>
        {/*          zyra         */}
        <div className="productCell" id="product5">
          <a
            href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1e68c6663e34767a/65162a19b258109f0b804f6d/Copy_of_Worlds_2023_VarsityJacket_ClientBanner_1920x1080.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Worlds 2023 Merch Drop</p>
          </a>
        </div>
        {/*          jacket         */}
        <div className="productCell" id="product6">
          <a
            href="https://merch.riotgames.com/en-gb/product/worlds-2023-varsity-jacket/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productsArrow} alt="gridproduct"></img>
            <p>Worlds 2023 Varsity Jacket</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
