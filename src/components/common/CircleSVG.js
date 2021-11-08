import React from "react";

const CircleSVG = (props) => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.5" r="15.5" fill={props.color}/>
        </svg>
    )
}

export default CircleSVG;