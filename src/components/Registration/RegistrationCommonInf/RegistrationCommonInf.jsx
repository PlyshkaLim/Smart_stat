import React from "react";
import p from "./RegistrationCommonInf.module.css";
import {NavLink} from "react-router-dom";
import numberOne from "../../../images/1.png";
import Circle from "../../common/Cirlce.jsx";
import Next from "../../common/Next";

const RegistrationCommonInf = () => {
    return (
        <div className={p.registration}>
            <div className={p.previous}>
            </div>
            <div className={p.number}>
                <img src={numberOne} alt={"numberOne"}/>
            </div>
            <div className={p.form}>
                <div className={p.regText}>РЕГИСТРАЦИЯ</div>
                <div className={p.form}>
                    <div className={p.formField}><input type="text" placeholder="Имя Фамилия"/></div>
                    <div className={p.formField}><input type="text" placeholder="Никнейм"/></div>
                    <div className={p.formField}><input type="date" placeholder="Дата рождения"/></div>
                    <div className={p.formField}><input type="email" placeholder="Адрес электронной почты"/></div>
                    <div className={p.formField}><input type="password" placeholder="Пароль"/></div>
                </div>
                <div className={p.hints}>
                    <Circle/> 8 и более символов<br/>
                    <Circle/> Хотя бы одна цифра<br/>
                    <Circle/> Специальные символы<br/>
                    <Circle/> Строчные и прописные буквы<br/>
                </div>
            </div>
            <div className={p.next}>
                <NavLink to='/registration/registrationSport'>
                    <Next/>
                </NavLink>
            </div>
        </div>
    )
}

export default RegistrationCommonInf;