import React from "react";
import "./DRating.css"
const DRating = () => {
  return (
    <div className="rating">
      <div className="saying">
      <div>
        <p style={{color:"#3ec6f0"}}>What They Say</p>
        <h1>
          Our Customer Say <br />
          About Us
        </h1>
      </div>
      <div className="forback-btn">
            <button>◀️</button>
            <button>▶️</button>
        </div>
        </div>
      <div className="rating-element">
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={50} height={50} /></div>
          <div>
          <h4>Dilnawaz</h4>
          <p>Creator, Chakra UI</p>
          </div>
          

          </div>
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://pixlr.com/images/index/remove-bg.webp" width={50} height={50} /></div>
          <div>
          <h4>Chris Hemsworth</h4>
          <p>Traveller</p>
          </div>

          </div>
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://pfpmaker.com/_nuxt/img/blog-preview-2.db10f37.webp" width={50} height={50} /></div>
          <div>
          <h4>Jennifer</h4>
          <p>Influencer</p>
          </div>
          </div>
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={50} height={50} /></div>
          <div>
          <h4>Emma</h4>
          <p>Tourister</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRating;
