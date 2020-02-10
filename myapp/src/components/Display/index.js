import React from "react";

function Display(props) {
    return (
        <img src={props.breed} alt={props.key} style={{width: "250px", height: "250px", padding: "2px"}} className="responsive"></img>
    )
}

export default Display;