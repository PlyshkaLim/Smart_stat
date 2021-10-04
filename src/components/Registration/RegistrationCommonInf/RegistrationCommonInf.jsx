import React from "react";
import p from "./RegistrationCommonInf.module.css";
import {NavLink} from "react-router-dom";

const RegistrationCommonInf = () => {
    return (
        <div className={p.registration}>
            <div className={p.header}>
                1 Общие данные
                2 О спорте
                3 Друзья
            </div>
            <br/>
            1
            <br/>
            <div className={p.form}>
                РЕГИСТРАЦИЯ
                <div className={p.q}><input type="text" placeholder="Имя Фамилия"/></div>
                <div className={p.q}><input type="text" placeholder="Никнейм"/></div>
                <div className={p.q}><input type="date" placeholder="Дата рождения"/></div>
                <div className={p.q}><input type="email" placeholder="Адрес электронной почты"/></div>
                <div className={p.q}><input type="password" placeholder="Пароль"/></div>
                <br/>
                <div>
                    8 и более символов<br/>
                    Хотя бы одна цифра<br/>
                    Специальные символы<br/>
                    Строчные и прописные буквы<br/>
                </div>
            </div>

            <div>
                <NavLink to='/registrationSport'>
                    Next
                </NavLink>

            </div>
            <div className={p.footer}>
            Уже есть аккаунт?
            <br/>
            <NavLink to="/authorizationCommonInf">
                Войти
            </NavLink>
            </div>
        </div>
    )
}

export default RegistrationCommonInf;