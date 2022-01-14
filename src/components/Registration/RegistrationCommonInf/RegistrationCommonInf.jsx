import React from "react";
import css from "./RegistrationCommonInf.module.css";
import {NavLink} from "react-router-dom";
import numberOne from "../../../images/1.png";
import Circle from "../../common/Cirlce.jsx";
import Next from "../../common/Next";

const RegistrationCommonInf = () => {
    return (
        <div className={css.registration}>
            <div className={css.previous}>
            </div>
            <div className={css.number}>
                <img src={numberOne} alt={"numberOne"}/>
            </div>
            <div className={css.form}>
                <div className={css.regText}>РЕГИСТРАЦИЯ</div>
                <div className={css.form}>
                    <div className={css.formField}><input type="text" placeholder="Имя Фамилия"/></div>
                    <div className={css.formField}><input type="text" placeholder="Никнейм"/></div>
                    <div className={css.formField}><input type="date" placeholder="Дата рождения"/></div>
                    <div className={css.formField}><input type="email" placeholder="Адрес электронной почты"/></div>
                    <div className={css.formField}><input type="password" placeholder="Пароль"/></div>
                </div>
                <div className={css.hints}>
                    <Circle/> 8 и более символов<br/>
                    <Circle/> Хотя бы одна цифра<br/>
                    <Circle/> Специальные символы<br/>
                    <Circle/> Строчные и прописные буквы<br/>
                </div>
            </div>
            <div className={css.next}>
                <NavLink to='/registration/registrationSport'>
                    <Next/>
                </NavLink>
            </div>
        </div>
    )
}

export default RegistrationCommonInf;