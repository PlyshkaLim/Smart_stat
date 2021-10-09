import React from "react";
import p from "./RegistrationSport.module.css";
import {NavLink} from "react-router-dom";
import numberTwo from "../../../images/2.png";
import Previous from "../../common/Previous";
import Next from "../../common/Next";

const RegistrationSport = () => {
    return (
        <div className={p.registration}>
            <div className={p.previous}>
                <NavLink to='/registration/registrationCommonInf'>
                    <Previous/>
                </NavLink>
            </div>
            <div className={p.number}>
                <img src={numberTwo} alt={"numberTwo"}/>
            </div>
            <div className={p.form}>
                <div className={p.regText}>РЕГИСТРАЦИЯ</div>
                <div className={p.form}>
                    <div className={p.formField}><input type="text" placeholder="Выберите вид спорта"/></div>
                    <div className={p.formField}><input type="text" placeholder="Выберите свою роль"/></div>
                    <div className={p.hints}>
                        Если у вас несколько ролей или видов спорта, вы сможете добавить их чуть позже в настройках<br/>
                    </div>
                </div>
            </div>
            <div className={p.next}>
                <NavLink to='/registration/registrationFriends'>
                    <Next/>
                </NavLink>
            </div>
        </div>
    )
}

export default RegistrationSport;