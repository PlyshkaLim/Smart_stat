import React from "react";
import p from "./Authorization.module.css";
import {NavLink} from "react-router-dom";

const Authorization = () => {
    return (
        <div className={p.authorization}>
            <div className={p.logo}>SMARTSTAT</div>
            <form>
                <div className={p.q}>
                    <input type="text" placeholder="Логин или электронная почта"/>
                </div>
                <div className={p.q}>
                    <input type="password" placeholder="Пароль"/>
                </div>
                <div className={p.q}>
                    Забыли пароль?
                </div>
                <div className={p.q}>
                    <button>Войти</button>
                </div>
            </form>
            <NavLink to="/registrationCommonInf">
                Регистрация
            </NavLink>
        </div>
    )
}

export default Authorization;