import React from 'react';
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbpub from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassessimoji from '../../img/glassesimoji.png'

const Intro = () => {
    return (
        <div>
            <div className="intro">
                <div className="i-left">
                    <div className="i-name">
                        <span>Hy! I Am</span>
                        <span>Rahmat Ali</span>
                        <span>Frontend Developer With High Level Experience in web Designing and Web Development, Pruducting the quality work.</span>
                        <button className='button i-button'>Hire Me</button>
                        <div className="i-icons">
                            <img src={github} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
                <div className="i-right">
                    <img src={vector1} alt="" />
                    <img src={vector2} alt="" />
                    <img src={boy} alt="" />
                    <img src={glassessimoji} alt="" />
                    <div style={{top:"-4%",left:'68%'}}>
                        <FloatingDiv img={crown} txt1='Web' txt2='Developer'></FloatingDiv>
                    </div>
                    <div style={{top:'18rem',left:'1rem'}}>
                        <FloatingDiv img={thumbpub} txt1='Best Design' txt2='Award'></FloatingDiv>
                    </div>

                    {/* blur */}
                    <div className="blur"></div>
                    <div className="blur" style={{background:'#c1f5ff',top:'17rem',left:'-9rem',width:'21rem',height:'11rem'}}></div>
                </div>
            </div>
        </div>
    );
};

export default Intro;