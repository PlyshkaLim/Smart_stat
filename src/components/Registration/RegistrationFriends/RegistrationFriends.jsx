import React from "react";
import p from "./RegistrationFriends.module.css";
import {NavLink} from "react-router-dom";

const RegistrationFriends = () => {
    return (
        <div className={p.registration}>
            <div className={p.header}>
                1 Общие данные
                2 О спорте
                3 Друзья
            </div>
            <div>
                <NavLink to='/registrationSport'>
                    Previous
                </NavLink>
            </div>
            3
            <br/>
            <div className={p.form}>
                РЕГИСТРАЦИЯ<br/>
                Найди друзей!
                <div className={p.q}><input type="text" placeholder="Введите никнейм"/></div>
            </div>

            <div>
                <NavLink to='/'>
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

export default RegistrationFriends;