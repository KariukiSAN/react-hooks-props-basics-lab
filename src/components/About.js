import React from "react";
import Links from "./Links";


function About (props){
  function About() {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>Links</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}

        <links github = {props.links.github} LinkedIn={props.links.LinkedIn}/>

      </div>
    );

}

}

export default About;
