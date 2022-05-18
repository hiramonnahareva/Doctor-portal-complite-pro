import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer style={{
            background: (`url(${footer})`),
            backgroundSize: 'Cover',
        }} className=" py-5 px-10 mt-16">
            <div className='footer text-xl'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href='#ska'>Branding</a>
                    <a className="link link-hover" href='#ska'>Design</a>
                    <a className="link link-hover" href='#ska'>Marketing</a>
                    <a className="link link-hover" href='#ska'>Advertisement</a>
                </div>
                <div>
                    <span className="footer-title" href='#ska'>Company</span>
                    <a className="link link-hover" href='#ska'>About us</a>
                    <a className="link link-hover" href='#ska'>Contact</a>
                    <a className="link link-hover" href='#ska'>Jobs</a>
                    <a className="link link-hover" href='#ska'>Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center pt-10'>
                <p>Copyright © {date} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;