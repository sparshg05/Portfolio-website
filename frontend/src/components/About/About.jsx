import { Typography } from '@mui/material';
import React from 'react'
import "./About.css";
 
const About = ({about}) => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>{about.quote}</Typography>
        </div>

        <div className="aboutContainer2">
            <div>
                <img src="https://i.imgur.com/qFXB5Gw.jpg" alt="SG" className="aboutAvatar"/>
                <Typography variant="h4" style={{
                  margin:"1vmax 0",
                  color:"black",
                }}>{about.name}</Typography>
                <Typography style={{
                  margin:"1vmax 0",
                }}>{about.title}</Typography>
            </div>

            <div>
              <Typography style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right",
              }}>
                {about.description}
              </Typography>
            </div>
        </div>
    </div>
  )
}

export default About