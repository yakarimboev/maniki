import React from "react";
import "./App.css";
import rec from "./assets/rec.svg";
import oodi from "./assets/oodi.svg";
import phone from "./assets/phone.svg";
import search from "./assets/search.svg";
import qiz from "./assets/qiz.svg";

export default function App() {
  return (
    <div>
      <div>
        <section className="header">
          <div className="container">
            <div className="header-parent">
              <div className="header-left">
                <img src={rec} alt="" />
                <img src={oodi} alt="" />
              </div>
              <div className="header-center">
                <a className="home" href="">
                  Home
                </a>
                <a href="">Menu</a>
                <a href="">Services</a>
                <a href="">Offers</a>
              </div>
              <div className="header-right">
                <img src={search} alt="" />
                <button>
                  <img src={phone} alt="" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="main">
          <div className="container">
            <div className="main-parent">
              <div className="main-left">
                <h1>
                  Dive into Delights <br /> Of Delectable Food
                </h1>
                <p>
                  Where Each Plate Weaves a Story of Culinary <br /> Mastery and
                  Passionate Craftsmanship
                </p>
                <div className="main-main">
                  <button>Order Now</button>
                  <h2>Watch Video</h2>
                </div>
              </div>
              <div className="main-right">
                <img src={qiz} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
