import React from "react";
import "./DHomePage.css";
const DHomePage = () => {
    const forward =">";
    const back ="<"
  return (
    <div className="homepage">
      <div className="homepege-title">
        <div>
          <h3>All you need is Adventour</h3>
          <h1>
            Let's Enjoy Your Life, <br />
            Explore Beautiful <span>Places.</span>🚀
          </h1>
          <p>
            We are travel agency giving you marvelous experience. So, get <br />{" "}
            your ticket with low price to your favorite destination.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/6f/75/15/6f75156a49475bddfc26ff0ee6794f23.jpg"
            width={350}
            height={500}
          />
        </div>
      </div>

      <div className="slider">
        <div className="sliderText" >
          <p>Top Destination</p>
          <h1>
            Wanderlist for <br />
            Your Wanderlist
          </h1>
        </div>
        <div className="forback-btn">
            <button>◀️</button>
            <button>▶️</button>
        </div>
      </div>
      <div className="placeDetails">
      <div>
        <img src="https://static.toiimg.com/photo/48538866.cms" width={300} height={300} />
        <h3>7 Days Bali and Gili <br/>Island Epid Experience</h3>
        <p>Bali, Indonesia</p>
        <h2>$35 <span>/Person</span></h2>
      </div>
      <div>
        <img src="https://assets3.thrillist.com/v1/image/2987522/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg" width={300} height={300} />
        <h3>7 Days Bali and Gili <br/>Island Epid Experience</h3>
        <p>Bali, Indonesia</p>
        <h2>$35 <span>/Person</span></h2>
      </div>
      <div>
        <img src="https://drifttravel.com/wp-content/uploads/2021/09/Sugar-Beach-A-Viceroy-Resort.jpg" width={300} height={300} />
        <h3>7 Days Bali and Gili <br/>Island Epid Experience</h3>
        <p>Bali, Indonesia</p>
        <h2>$35 <span>/Person</span></h2>
      </div>
      <div>
        <img src="https://www.travelandleisure.com/thmb/hHC2NXe5INeEB4mUkzsVPerAamU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Turtle-Bay-FAMILYBEACHRESORT0223-dd9bc741f7084665a284907b69be0331.jpg" width={300} height={300} />
        <h3>7 Days Bali and Gili <br/>Island Epid Experience</h3>
        <p>Bali, Indonesia</p>
        <h2>$35 <span>/Person</span></h2>
      </div>
      </div>
     
    </div>
  );
};

export default DHomePage;
