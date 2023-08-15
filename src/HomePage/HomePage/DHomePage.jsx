import React, { useState } from "react";
import "./DHomePage.css";
const DHomePage = () => {
  const [current, setCurrent] = useState(0);

  const forward = ">";
  const back = "<";

  const slider_Data = [
    {
      image: `https://static.toiimg.com/photo/48538866.cms`,
      title: "Sunny Beach Paradise",
      name: "Golden Shores Beach",
      location: "Tropical Island",
      ratings: 4.8,
      description:
        "Golden Shores Beach is a breathtaking tropical paradise that boasts crystal-clear waters, powdery white sands, and lush palm trees. Whether you're a sunbather, a swimmer, or an adventure-seeker, this beach has something for everyone. Explore vibrant coral reefs while snorkeling or indulge in delicious local cuisine at the beachside cafes.",
        price: "$200 per night",
      },

    {
      image: `https://assets3.thrillist.com/v1/image/2987522/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg`,
      title: "Serene Ocean Escape",
      name: "Azure Cove Retreat",
      location: "Coastal Haven",
      ratings: 4.6,
      description:
        "Azure Cove Retreat is a hidden gem along the coastline, offering a peaceful and idyllic escape from the bustling world. With its secluded cove, soft sands, and gentle waves, it's the perfect spot to unwind and recharge. Watch mesmerizing sunsets over the horizon and take leisurely strolls along the shoreline.",
        price: "$160 per night",
      },
    {
      image: `https://drifttravel.com/wp-content/uploads/2021/09/Sugar-Beach-A-Viceroy-Resort.jpg`,
      title: "Majestic Hilltop Serenity",
      name: "Misty Mountain Peak",
      location: "Tranquil Hills",
      ratings: 4.9,
      description:
        "Misty Mountain Peak is a haven for nature enthusiasts and adventure seekers. Perched high above the clouds, this hilltop paradise offers panoramic vistas of lush valleys, cascading waterfalls, and rolling mist. Embark on hiking trails that wind through enchanting forests and explore the local culture in nearby villages.",
        price: "$215 per night",
      },
    {
      image: `https://www.travelandleisure.com/thmb/hHC2NXe5INeEB4mUkzsVPerAamU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Turtle-Bay-FAMILYBEACHRESORT0223-dd9bc741f7084665a284907b69be0331.jpg`,
      title: "Sandy Shores Paradise",
      name: "Sandy Shores",
      location: "Coastal Town, Beachland",
      ratings: 4.8,
      description:
        "Sandy Shores Paradise offers a pristine beach experience like no other. With golden sands, crystal-clear waters, and breathtaking sunsets, it's a haven for beach lovers. Explore various water sports, relax under swaying palm trees, and indulge in local seafood delights.",
        price: "$230 per night",
      },
    {
      image: `https://images.unsplash.com/photo-1619120238346-978e07731e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80`,
      title: "Majestic Hills Retreat",
      name: "Majestic Hills",
      location: "Serene Mountains, Hilltop Valley",
      ratings: 4.7,
      description:
        "Majestic Hills Retreat is a tranquil escape amidst lush greenery and mist-covered peaks. Ideal for nature enthusiasts and trekkers, this place offers rejuvenating hikes, stunning panoramic views, and cozy mountain cabins for a serene getaway.",
        price: "$170 per night",
      },
    {
      image: `https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1268855.jpg&fm=jpg`,
      title: "Azure Bay Bliss",
      name: "Azure Bay",
      location: "Secluded Cove, Island Paradise",
      ratings: 4.9,
      description:
        "Azure Bay Bliss is an untouched island paradise with powdery white sands and turquoise waters. Snorkel in vibrant coral reefs, enjoy beachfront yoga sessions, and relish tropical fruits while lounging in hammocks under the shade of swaying palms.",
        price: "$250 per night",
      },
    {
      image: `https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Hill-Stations-Holidays.jpg`,
      title: "Misty Mountain Lodge",
      name: "Misty Mountain",
      location: "Mystic Range, Fogville",
      ratings: 4.6,
      description:
        "Misty Mountain Lodge offers a surreal experience surrounded by mist-kissed peaks and enchanting woodlands. Wake up to the soothing sounds of nature, embark on misty trails, and cozy up by the fireplace in charming alpine lodges.",
        price: "$180 per night",
      },
  ];

  const length = slider_Data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
          <div>
            {" "}
            <h1>ADD HERE SEARCH BOX ............</h1>{" "}
          </div>
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/6f/75/15/6f75156a49475bddfc26ff0ee6794f23.jpg" />
        </div>
      </div>

      <div className="slider">
        <div className="sliderText">
          <p style={{color:"#00a6ed"}}>Top Destination</p>
          <h1 style={{ color: "black" }}>
            Wanderlist for <br />
            Your Wanderlist
          </h1>
        </div>
        <div className="forback-btn">
          <button className="prev" onClick={prevSlide}>◀️</button>
          <button className="next" onClick={nextSlide}>▶️</button>
        </div>
      </div>
      <div className="placeDetails">
        {slider_Data.map((slideimg, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slideimg.image} />}
            </div>
          );
        })}

        <div className="placeDetails_Text">
          {slider_Data.map((slide, index) => {
            return index === current && <h1> Location : {slide.title}</h1>;
          })}

          {slider_Data.map((slide, index) => {
            return index === current && <h2> Place : {slide.location}</h2>;
          })}

          {slider_Data.map((slide, index) => {
            return index === current && <p>{slide.description}</p>;
          })}

          {slider_Data.map((slide, index) => {
            return index === current && <h3> Rating: {slide.ratings} {slide.ratings > 4.7 ? "*****" : "****" }</h3>;
          })}

          <h2> {slider_Data.map((slide, index) => {
            return index === current && <p> Price : {slide.price} </p>;
          })} 
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DHomePage;
