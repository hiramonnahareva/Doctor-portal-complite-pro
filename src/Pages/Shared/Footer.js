import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer style={{
            background: (`url(${footer})`),
            // backgroundSize: 'cover'
            backgroundSize: 'Cover',
        }} className=" p-10">
            <div className='footer text-xl'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center py-5'>
                <p>Copyright © {date} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;