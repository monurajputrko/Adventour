import React from "react";
import "./DRating.css"
const DRating = () => {
  return (
    <div className="rating" style={{paddingBottom:"50px"}}>
      <div className="saying" style={{marginBottom:"50px"}}>
      <div>
        <p style={{color:"#00a6ed"}}>What They Say</p>
        <h1>
          Our Customer Say <br />
          About Us
        </h1>
      </div>
      <div style={{marginBottom:-"50px"}} className="forback-btn1">
            <button>◀️</button>
            <button>▶️</button>
        </div>
        </div>
      <div className="rating-element">
        <div className="rating-element-div">
          <h3 className="text_color" >"Momorable Trip"</h3>
          <p className="text_color" >
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={50} height={50} /></div>
          <div>
          <h4 className="text_color" >Dilnawaz</h4>
          <p className="text_color">Creator, Chakra UI</p>
          </div>
          

          </div>
        </div>
        <div className="rating-element-div">
          <h3 className="text_color">"Momorable Trip"</h3>
          <p className="text_color">
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://pixlr.com/images/index/remove-bg.webp" width={50} height={50} /></div>
          <div>
          <h4 className="text_color">Chris Hemsworth</h4>
          <p className="text_color">Traveller</p>
          </div>

          </div>
        </div>
        <div className="rating-element-div">
          <h3 className="text_color">"Momorable Trip"</h3>
          <p className="text_color">
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://pfpmaker.com/_nuxt/img/blog-preview-2.db10f37.webp" width={50} height={50} /></div>
          <div>
          <h4 className="text_color">Jennifer</h4>
          <p className="text_color">Influencer</p>
          </div>
          </div>
        </div>
        <div className="rating-element-div">
          <h3 className="text_color" >"Momorable Trip"</h3>
          <p className="text_color">
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div className="userdetails">
           <div><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={50} height={50} /></div>
          <div>
          <h4 className="text_color">Emma</h4>
          <p className="text_color">Tourister</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRating;
