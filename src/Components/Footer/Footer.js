import React from 'react';
import Wave from '../../img/wave.png'
import './Footer.css'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'
import github from '../../img/github.svg'

const Footer = () => {
    return (
        <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sk.rahmatali6792@gmail.com</span>
        <div className="f-icons">
          
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={github } alt="" />
        </div>
        <p>All Copy Right Reserved 2022</p>
      </div>
    </div>
    );
};

export default Footer;