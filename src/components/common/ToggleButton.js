import React from "react";

const ToggleButton = () => {
    return (
        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3696 4.07729C21.8367 3.99342 23.3021 4.00013 24.7691 4.00013C24.7792 4.00013 32.2031 4.00013 32.2031 4.00013C33.6988 4.00013 35.1642 3.99342 36.6304 4.07729C37.9634 4.15277 39.2618 4.31381 40.5543 4.67361C43.2751 5.43013 45.6511 7.01026 47.3686 9.25045C49.0759 11.4764 50 14.2014 50 16.9993C50 19.8006 49.0759 22.5239 47.3686 24.7498C45.6511 26.9892 43.2751 28.5701 40.5543 29.3266C39.2618 29.6865 37.9634 29.8466 36.6304 29.923C35.1642 30.0068 33.6988 29.9993 32.2317 29.9993C32.2216 29.9993 24.7961 30.0001 24.7961 30.0001C23.3021 29.9993 21.8367 30.0068 20.3696 29.923C19.0375 29.8466 17.739 29.6865 16.4465 29.3266C13.7257 28.5701 11.3497 26.9892 9.63227 24.7498C7.92492 22.5239 7 19.8006 7 17.0001C7 14.2014 7.92492 11.4764 9.63227 9.25045C11.3497 7.01026 13.7257 5.43013 16.4465 4.67361C17.739 4.31381 19.0375 4.15277 20.3696 4.07729Z" fill="#DFDFDF"/>
            <g filter="url(#filter0_dd_1064_2612)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 29C26.6274 29 32 23.6274 32 17C32 10.3726 26.6274 5 20 5C13.3726 5 8 10.3726 8 17C8 23.6274 13.3726 29 20 29Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_dd_1064_2612" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1064_2612"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_1064_2612" result="effect2_dropShadow_1064_2612"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1064_2612" result="shape"/>
                </filter>
            </defs>
        </svg>

    )
}

export default ToggleButton;