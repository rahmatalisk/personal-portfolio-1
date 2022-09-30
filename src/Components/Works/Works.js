import React from 'react';
import upwork from '../../img/Upwork.png'
import spotify from '../../img/Shopify.png'
import fiverr from '../../img/fiverr.png'
import facebook from '../../img/Facebook.png'
import amazon from '../../img/amazon.png'
import './Works.css'

const Works = () => {
    return (
        <div className='works'>
            {/* left side */}
            <div className="awesome">
                <span>Work All These</span>
                <span>Client & Brands</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing. <br />Lorem ipsum dolor sit. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quos? <br />Lorem ipsum dolor sit amet.</span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{ background: '#ABF1ff94' }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-main-circle">
                    <div className="w-sec-circle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={spotify} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={amazon} alt="" />
                    </div>
                </div>
                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>
            </div>

        </div>
    );
};

export default Works;