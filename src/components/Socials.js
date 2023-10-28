import React from "react";
import { useState } from "react";
import ppNav from "../assets/abdou.png";
import list from "../assets/list.png";
import loupe from "../assets/loupe.png";
import addFolder from "../assets/addFolder.png";
import addUser from "../assets/addUser.png";
import triangle from "../assets/triangle.png";
import SocialsFooter from "./SocialsFooter";

const Socials = () => {
  const friends = [
    {
      name: "Chicken Lord",
      categorie: "leSang",
      online: false,
      statuType: "afk",
      statut: "I love POULET",
    },
    {
      name: "Aude Noraa",
      categorie: "general",
      online: false,
      statuType: "idle",
      statut: "d4rKSaZukE",
      iconAvatar:
        "https://i.pinimg.com/originals/9a/d1/c9/9ad1c9588e4f014a0e6b6f7587a1dc73.png",
    },
    {
      name: "cøraya",
      categorie: "leSang",
      online: false,
      statuType: "queue",
      statut: "",
      iconAvatar:
        "https://juliojdiaz.files.wordpress.com/2015/11/thumb_poppy_reveal_site.jpg",
    },
    {
      name: "Powerlevel",
      categorie: "leSang",
      online: true,
      statuType: "idle",
      statut: "Dancing in the moon light",
      iconAvatar:
        "https://i.pinimg.com/736x/c9/19/0c/c9190cf1c03043ff1f816386e5585955.jpg",
    },
    {
      name: "Caroøn",
      categorie: "leSang",
      online: false,
      statuType: "queue",
      statut: "Smurf",
      iconAvatar:
        "https://64.media.tumblr.com/7ae496aa09586737ac74e2b88edb6696/4755a47e0e33b2a4-53/s400x600/815ab65ac72b4775684983a04b23f63623b40481.jpg",
    },
    {
      name: "Tanzo",
      categorie: "leSang",
      online: true,
      statuType: "queue",
      statut: "In Game",
      iconAvatar: "https://i.redd.it/2vbdbmsovwz31.jpg",
    },
    {
      name: "GROTEK",
      categorie: "leSang",
      online: true,
      statuType: "idle",
      statut: "ARAM ? ",
      iconAvatar:
        "https://i.pinimg.com/736x/17/c0/f9/17c0f905e9b0f23c5641947921fb8c53.jpg",
    },
    {
      name: "Mello El Pinso",
      categorie: "general",
      online: true,
      statuType: "idle",
      statut: "d4rKSaZukE",
      iconAvatar:
        "https://64.media.tumblr.com/97477f960aa8643bdaa206a4d694b2c8/7f551d0a68dc1de7-ac/s640x960/5177a2fe54808cc01b6adced9dd899050958a7ef.jpg",
    },
    {
      name: "R ö a Zz",
      categorie: "leSang",
      online: false,
      statuType: "queue",
      statut: "ARAM ?",
      iconAvatar:
        "https://i.pinimg.com/550x/53/dc/2f/53dc2f11ce63dd4abe0c2613146658b9.jpg",
    },
    {
      name: "Gino",
      categorie: "leSang",
      online: true,
      statuType: "queue",
      statut: "Champ Select",
      iconAvatar:
        "https://i.pinimg.com/originals/95/4e/43/954e43b9320f41cdd0879b2a70ff344d.jpg",
    },
    {
      name: "TheOutEmpire",
      categorie: "leSang",
      online: false,
      statuType: "queue",
      statut: "Offline since 1996",
      iconAvatar:
        "https://i.pinimg.com/170x/40/a1/ac/40a1ac9579adba4b592a15bcea8f0e18.jpg",
    },
    {
      name: "Leen",
      categorie: "general",
      online: false,
      statuType: "queue",
      statut: "ARAM ?",
      iconAvatar:
        "https://sidegamer.com/wp-content/uploads/2020/03/Vengeful-Wrath.png",
    },
    {
      name: "Sire Møula",
      categorie: "general",
      online: true,
      statuType: "afk",
      statut: "&#@!$",
      iconAvatar:
        "https://i.ytimg.com/an/T1jXFSj4pTM/62bb520a-cf71-436b-b037-3c7b6941a10f_mq.jpg?v=5cc8e37f",
    },
    {
      name: "Skydream",
      categorie: "general",
      online: false,
      statuType: "queue",
      statut: "ARAM ?",
      iconAvatar:
        "https://i.pinimg.com/550x/3b/c1/54/3bc1541d98bbcb1ae5aa672864fd2a48.jpg",
    },
  ];

  const [socialCatOpenedSang, setSocialCatOpenedSang] = useState(true);
  const [socialCatOpenedGeneral, setSocialCatOpenedGeneral] = useState(true);
  const [socialCatOpenedOffline, setSocialCatOpenedOffline] = useState(false);

  return (
    <div id="socialsContainer">
      <div id="headerSocials">
        <p>SOCIAL</p>
        <div id="headerSocialsIcons">
          <img src={addUser} alt="addUser" />
          <img src={addFolder} alt="addFolder" />
          <img src={list} alt="list" />
          <img src={loupe} alt="loupe" />
        </div>
      </div>
      <div id="friendRequestsContainer">
        <p>Friend Requests</p>
        <p>13</p>
      </div>
      <div id="categoriesSocialWrapper">
        <div className="categorieSocial">
          <div
            className="catSocialheader"
            onClick={() => setSocialCatOpenedSang((prev) => !prev)}
          >
            <div className="arrowCatSocial" data-opened={socialCatOpenedSang}>
              <img src={triangle} alt="triangle" />
            </div>
            <p>LA FAMILLE</p>
            <p>
              (
              {
                friends.filter(
                  (friend) =>
                    (friend.categorie === "leSang") & (friend.online === true)
                ).length
              }
              /
              {friends.filter((friend) => friend.categorie === "leSang").length}
              )
            </p>
          </div>
          <div
            className={
              "listFriendsCard " +
              (socialCatOpenedSang === true ? "" : "hidden")
            }
          >
            {friends
              .filter(
                (friend) =>
                  friend.online === true && friend.categorie === "leSang"
              )
              .map((friend) => (
                <div className="friendCard">
                  <div
                    className="ppFriendCard"
                    data-statutType={friend.statuType}
                  >
                    <img
                      src={friend.iconAvatar ? friend.iconAvatar : ppNav}
                      alt="iconAvatrar"
                    />
                  </div>
                  <div className="friendCardCol">
                    <div className="friendCardName">{friend.name}</div>
                    <div
                      className="friendCardStatus"
                      data-statutType={friend.statuType}
                    >
                      {friend.statut}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="categorieSocial">
          <div
            className="catSocialheader"
            onClick={() => setSocialCatOpenedGeneral((prev) => !prev)}
          >
            <div
              className="arrowCatSocial"
              data-opened={socialCatOpenedGeneral}
            >
              <img src={triangle} alt="triangle" />
            </div>
            <p>GENERAL</p>
            <p>
              (
              {
                friends.filter(
                  (friend) =>
                    (friend.categorie === "general") & (friend.online === true)
                ).length
              }
              /
              {
                friends.filter((friend) => friend.categorie === "general")
                  .length
              }
              )
            </p>
          </div>
          <div
            className={
              "listFriendsCard " +
              (socialCatOpenedGeneral === true ? "" : "hidden")
            }
          >
            {friends
              .filter(
                (friend) =>
                  friend.online === true && friend.categorie === "general"
              )
              .map((friend) => (
                <div className="friendCard">
                  <div
                    className="ppFriendCard"
                    data-statutType={friend.statuType}
                  >
                    <img
                      src={friend.iconAvatar ? friend.iconAvatar : ppNav}
                      alt="iconAvatrar"
                    />
                  </div>
                  <div className="friendCardCol">
                    <div className="friendCardName">{friend.name}</div>
                    <div
                      className="friendCardStatus"
                      data-statutType={friend.statuType}
                    >
                      {friend.statut}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="categorieSocial">
          <div
            className="catSocialheader"
            onClick={() => setSocialCatOpenedOffline((prev) => !prev)}
          >
            <div
              className="arrowCatSocial"
              data-opened={socialCatOpenedOffline}
            >
              <img src={triangle} alt="triangle" />
            </div>
            <p>OFFLINE</p>
            <p>
              ({friends.filter((friend) => friend.online === false).length})
            </p>
          </div>
          <div
            className={
              "listFriendsCard " +
              (socialCatOpenedOffline === true ? "" : "hidden")
            }
          >
            {friends
              .filter((friend) => friend.online === false)
              .map((friend) => (
                <div className="friendCard friendCardOffline">
                  <div className="ppFriendCard" data-statutType={friend.online}>
                    <img
                      src={friend.iconAvatar ? friend.iconAvatar : ppNav}
                      alt="iconAvatrar"
                    />
                  </div>
                  <div className="friendCardCol">
                    <div className="friendCardName">{friend.name}</div>
                    <div className="friendCardStatus">Offline</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <SocialsFooter />
    </div>
  );
};

export default Socials;
