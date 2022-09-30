import React from 'react';
import Card from '../Card/Card';
import './Services.css'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import heartemoji from '../../img/heartemoji.png'
import resume from '../../img/resume.pdf'

const Services = () => {
    return (
        <div className='services'>
            {/* left site */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing. <br />Lorem ipsum dolor sit.</span>
                <a href={resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{ background: '#ABF1ff94' }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card imoji={glasses} title={'Design'} detail={'Figma, Sketch,Photoshop, Adobe, Adobe xd'}></Card>

                </div>
                <div style={{ left: '-4rem',top:'12rem' }}>
                    <Card imoji={heartemoji} title={'Developer'} detail={'Html, Css, Javascript, React'}></Card>

                </div>
                <div style={{ left: '12rem',top:'19rem' }}>
                    <Card imoji={humble} title={'UI/UX'} detail={'Figma, Sketch,Photoshop, Adobe, Adobe xd'}></Card>

                </div>
            </div>

        </div>
    );
};

export default Services;