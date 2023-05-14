import React from "react";
import {SiGithub,SiCodechef,SiCodeforces,SiLinkedin} from 'react-icons/si'
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                  
                <div className="socialIcons">
                    <span className="icon">
                        <SiGithub />
                    </span>
                    <span className="icon">
                        <SiLinkedin />
                    </span>
                    <span className="icon">
                        <SiCodeforces />
                    </span>
                    <span className="icon">
                        <SiCodechef />
                    </span>
                </div>
        </footer>
    );
};

export default Footer;
