import React from "react";
import p from "./Authorization.module.css";
import {NavLink} from "react-router-dom";

const Authorization = () => {
    return (
        <div className={p.authorization}>
            <div className={p.logo}>
                <span className={p.logoFirstPart}>SMART</span>
                <span className={p.logoSecondPart}>STAT</span>
            </div>
            <form className={p.form}>
                <div className={p.formField}><input type="text" placeholder="Логин или электронная почта"/></div>
                <div className={p.formField}><input type="password" placeholder="Пароль"/></div>
                <div className={p.q}>
                    Забыли пароль?
                </div>
                <div className={p.buttonLogIn}>
                    <NavLink to="/main_page">
                        Войти
                    </NavLink>
                </div>
            </form>
            <div className={p.buttonReg}>
                <NavLink to="/registration/registrationCommonInf">
                    Регистрация
                </NavLink>
            </div>
        </div>
    )
}

export default Authorization;