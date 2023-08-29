//create a new component called links and then add what's necessary:

import React from "react";
//an <h3> element with the text of "Links"
//an <a> element with its href and text content set to URL of the user's Github link, passed down as a prop
//a second <a> element with its href and text content set to URL of the user's LinkedIn link, passed down as a prop

function Links (props){
    <div>
        <h3>Links</h3>
        <a href = {props.github}>{props.github}</a>
        <a href= {props.LinkedIn}>{props.LinkedIn}</a>
    </div>
}

export default Links;
