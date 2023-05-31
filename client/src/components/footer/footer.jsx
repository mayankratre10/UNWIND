import React from "react";
import {SiGithub,SiCodechef,SiCodeforces,SiLinkedin} from 'react-icons/si'
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="infoText">
                    Hey, MySelf Mayank A full Stack MERN developer, I creted this site for search your favourite movies and tv shows and get the details. Currently I am open to work on projects based on React, MonogoDB, Express, Node, Redux etc. You can find me in UPWORK for your work as Mayank Ratre MERN developer.Thank you for visiting.
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
