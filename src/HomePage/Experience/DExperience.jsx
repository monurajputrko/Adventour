import React from "react";
import "./DExperience.css";
const DExperience = () => {
  return (
    <div className="experience">
      <div className="experience-element">
        <div>
          <img
            src="https://adventour-app.vercel.app/static/media/modelTwo.bf411a9ed0f3be90d397.png"
            width={400}
            height={600}
          />
        </div>
        <div className="Experience_text_Div" >
          <p style={{color:"#00a6ed"}}>Our Experience</p>
          <h1 style={{fontSize:40}} >Save More With Our Best Deals</h1>
          <p style={{color:"#a3a3a3"}}>The company serves customers from freelance <br/> web professionals to digital agencies, all the way up to the large hosting companies.</p>
          <div className="achieve">
      <div>
        <h1>12+</h1>
        <p>Years</p>
        <p>Experience</p>
      </div>
      <div>
        <h1>15+</h1>
        <p>Success</p>
        <p>Journey</p>
      </div>
      <div>
        <h1>9+</h1>
        <p>Awards</p>
        <p>Winning</p>
      </div>
      </div>
        </div>
        
      </div>
      
     
    </div>
  );
};

export default DExperience;
