import React from "react";
import "./DFooter.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-short"></div>
      <div className="gridColumn">
        <div className="connected">
          <p>Stay Connected</p>
          <h1>Get Started with Adventour!</h1>
        </div>
        <div>
          <button>Get Started →</button>
        </div>
      </div>

      <footer className="footer_Div">
        <div>
          <h3>Adventour.</h3>
          <p>
            Lorem Ipsum passages, and more recently with <br/> desktop publishing
            software like Aldus PageMaker <br/> including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <h3>Sitemap</h3>
          <p>Services</p>
          <p>About Us</p>
          <p>Booking</p>
          <p>Cancellation</p>
        </div>
        <div>
          <h3>Comapany</h3>
          <p>Carres</p>
          <p>Our Team</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Tower A, Block-C Cempaka,Jakarta-3409</p>
          <p>Adventour@gmail.com (002) +62 243 543</p>
        </div>

        
      </footer>
      <div className="copyright">
          <p> © 2022 Adventour All Right Reserved</p>
          <div>
            <ul>
                <li>Term & Condition</li>
                <li>Privacy</li>
                <li>Policy</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Footer;
