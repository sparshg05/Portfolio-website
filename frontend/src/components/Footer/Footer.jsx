import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import React from 'react'
import {BsGithub, BsInstagram , BsLinkedin} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
                Hey, my name is Sparsh Goyal. I am a full-stack developer with MERN stack and
                full of enthusiasm to learn new technologies.
            </Typography>

            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Me</Typography>
            </Link>
        </div>

        <div>
            <Typography variant="h6" className="last-child">Social Media</Typography>
            <a href="https://github.com/sparshg05" target="blank">
                <BsGithub/>
            </a>
            <a href="https://www.instagram.com/sparshg05/" target="blank">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sparsh-goyal-90b031194/" target="blank">
                <BsLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Footer