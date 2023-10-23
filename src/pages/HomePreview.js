import React from "react";
function HomePreview() {
  return (
    <div id="homePreviewContainer">
      <button className="button" id="homePreviewRotationChamp">
        Free Champion Rotation
      </button>
      <div id="homePreviewAmazonPrimeContainer">
        <p>FREE REWARDS :</p>
        <p>OCT 18 - NOV 17</p>
        <p>PRIME GAMING CAPSULE</p>
        <button className="button">
          <a
            href="https://gaming.amazon.com/loot/leagueoflegends?ref_=SM_LOL11_P5_IGP"
            rel="noreferrer"
            target="_blank"
          >
            CLAIM NOW{" "}
          </a>
        </button>
      </div>
      <div id="homePreviewContentRelated">
        <div className="homePreviewContentRelatedCell">
          <a
            href="https://www.youtube.com/watch?v=HYsz1hP0BFo"
            rel="noreferrer"
            target="_blank"
          >
            <div
              style={{
                "--background":
                  "url('https://pbs.twimg.com/media/FdRKxt9XgAQVHDS?format=jpg&name=large')",
              }}
            ></div>
            <p>Lil Nas X - STAR WALKING'</p>
          </a>
        </div>

        <div className="homePreviewContentRelatedCell">
          <a
            href="https://www.team-aaa.com/upload/admin/LoL/PBE/12.18/Fright%20Night%20Nautilus.jpg"
            rel="noreferrer"
            target="_blank"
          >
            <div
              style={{
                "--background":
                  "url('https://www.team-aaa.com/upload/admin/LoL/PBE/12.18/Fright%20Night%20Nautilus.jpg')",
              }}
            ></div>
            <p>Fright Night Nautilus & Renata</p>
          </a>
        </div>
        <div className="homePreviewContentRelatedCell">
          <a
            href="https://images2.minutemediacdn.com/image/upload/c_crop,w_1215,h_683,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/dbltap_en_international_web/01gcex07thb5vp5t12rw.jpg"
            rel="noreferrer"
            target="_blank"
          >
            <div
              style={{
                "--background":
                  "url('https://images2.minutemediacdn.com/image/upload/c_crop,w_1215,h_683,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/dbltap_en_international_web/01gcex07thb5vp5t12rw.jpg')",
              }}
            ></div>
            <p>Fright Night Urgot </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePreview;
