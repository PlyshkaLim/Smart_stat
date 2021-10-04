import React from "react";
import p from "./RegistrationSport.module.css";
import {NavLink} from "react-router-dom";

const RegistrationSport = () => {
    return (
        <div className={p.registration}>
            <div className={p.header}>
                1 Общие данные
                2 О спорте
                3 Друзья
            </div>
            <div>
                <NavLink to='/registrationCommonInf'>
                    Previous
                </NavLink>
            </div>
            2
            <br/>
            <div className={p.form}>
                РЕГИСТРАЦИЯ
                <div className={p.q}><input type="text" placeholder="Выберите вид спорта"/></div>
                <div className={p.q}><input type="text" placeholder="Выберите свою роль"/></div>
                <div>
                    Если у вас несколько ролей или видов спорта, вы сможете добавить их чуть позже в настройках<br/>
                </div>
            </div>
            <div>
                <NavLink to='/registrationFriends'>
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

export default RegistrationSport;