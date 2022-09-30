import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
                </div>
            </div>
            <div className="c-right">
                <form>
                    <input type="text" placeholder='Name' className='user' name='user-name' />
                    <input type="email" placeholder='Email' className='user' name='user-email' />
                    <textarea type="text" placeholder='Message' className='user' name='message' />
                    <input type="submit" value="Send" className='button' />
                    <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;