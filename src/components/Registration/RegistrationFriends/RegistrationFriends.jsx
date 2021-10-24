import React from "react";
import p from "./RegistrationFriends.module.css";
import numberThree from "../../../images/3.png";
import {NavLink} from "react-router-dom";
import Previous from "../../common/Previous";
import Next from "../../common/Next";


const RegistrationFriends = () => {
    return (
        <div className={p.registration}>
            <div className={p.previous}>
                <NavLink to='/registration/registrationSport'>
                    <Previous/>
                </NavLink>
            </div>
            <div className={p.number}>
                <img src={numberThree} alt={"numberThree"}/>
            </div>
            <div className={p.form}>
                <div className={p.regText}>РЕГИСТРАЦИЯ</div>
                <div className={p.form}>
                    Найди друзей!
                    <div className={p.formField}><input type="text" placeholder="Введите никнейм"/></div>
                </div>
            </div>
            <div className={p.next}>
                <NavLink to='/calendar'>
                    <Next/>
                </NavLink>
            </div>
        </div>
    )
}

export default RegistrationFriends;