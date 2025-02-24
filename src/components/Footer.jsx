import React from "react";
import logo from "../assets/images/LOGOdark.png";
import "../assets/style/components/footer.scss";

const Footer = () => {
    return (
      <footer className="footer">
            <div className="footer_img">
              <img src={logo} alt="Logo de Kasa" className="logodark" />
            </div>
        
        <div className="footer__content">
          <p> © 2020 Kasa. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  