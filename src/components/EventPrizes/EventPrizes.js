import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import "./EventPrizes.css";
import first from "../../assets/1st.png";
import second from "../../assets/2nd.png";
import third from "../../assets/3rd.png";
import hackBuilt from "../../assets/hack-built.png";
import AWSug from "../../assets/AWSug.png";
import Polygon from "../../assets/Polygon.png";
import Celo from "../../assets/Celo.png";
import Portis from "../../assets/Portis.png";
import Tezos from "../../assets/Tezos.png";
import Spoon from "../../assets/spoon.png";
export default class EventPrizes extends Component {
  prizeCards = [
    {
      description: "First Prize",
      img: first,
      prizeMoney: "10,000 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Second Prize",
      img: second,
      prizeMoney: "5,000 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Third Prize",
      img: third,
      prizeMoney: "2,500 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Best Hack Built",
      img: hackBuilt,
      prizeMoney: "2,000 INR",
      imgStyle: "prize-image",
    },
    {
      description: "20$ AWS credit ",
      img: AWSug,
      prizeMoney: "20$",
      imgStyle: "devfolio-prize-image",
    },
    {
      description: "Best Hack built on Tezos",
      img: Tezos,
      prizeMoney: "20,000 INR",
      imgStyle: "devfolio-prize-image",
    },
    {
      description: "Best Hack built on Portis",
      img: Portis,
      prizeMoney: "15,000 INR",
      imgStyle: "devfolio-prize-image",
    },
    {
      description: "Best Hack built on Polygon",
      img: Polygon,
      prizeMoney: "10,000 INR",
      imgStyle: "devfolio-prize-image",
    },
    {
      description: "Best Hack built on Celo",
      img: Celo,
      prizeMoney: "10,000 INR",
      imgStyle: "devfolio-prize-image",
    },
    {
      description: "Best Hack built on Spoon",
      img: Spoon,
      prizeMoney: "10,000 INR",
      imgStyle: "devfolio-prize-image",
    },
  ];
  render() {
    return (
      <>
      <div id="prizes-link_for_navbar"></div>
      <div id="prizes">
        <EventSectionHeading text="Prizes" />
        <div className="prize-container">
          {this.prizeCards.map((prize) => (
            <div className="prize-card">
              <img className={prize.imgStyle} style={{ textAlign: "center" }} src={prize.img} />
              <div className="prize-text">
                <div style={{ textAlign: "center" }}>{prize.description}</div>
                <div style={{ textAlign: "center",marginTop:"10px" }}>
                  <b>{prize.prizeMoney}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}
