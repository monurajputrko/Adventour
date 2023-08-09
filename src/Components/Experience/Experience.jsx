import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-element">
        <div>
          <img
            src="https://i.pinimg.com/564x/6f/75/15/6f75156a49475bddfc26ff0ee6794f23.jpg"
            width={250}
            height={400}
          />
        </div>
        <div>
          <p style={{color:"#3ec6f0"}}>Our Experience</p>
          <h1>Save More With Our Best Deals</h1>
          <p>The company serves customers from freelance web professionals to digital agencies, all the way up to the large hosting companies.</p>
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

export default Experience;
