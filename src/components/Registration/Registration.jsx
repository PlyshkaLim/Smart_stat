import React from "react";
import p from "./Registration.module.css";
import {NavLink, Route} from "react-router-dom";
import RegistrationSport from "./RegistrationSport/RegistrationSport";
import RegistrationFriends from "./RegistrationFriends/RegistrationFriends";
import RegistrationCommonInf from "./RegistrationCommonInf/RegistrationCommonInf";

const Registration = (props) => {
    let regComInf = "/registration/registrationCommonInf";
    let regSport = "/registration/registrationSport";
    let regFriends = "/registration/registrationFriends";
    return (
        <div className={p.registration}>
            <div className={p.header}>
                <span className={window.location.pathname === regComInf ? p.active : p.topic}>1 Общие данные</span>
                <span className={window.location.pathname === regSport ? p.active : p.topic}>2 О спорте</span>
                <span className={window.location.pathname === regFriends ? p.active : p.topic}>3 Друзья</span>
            </div>
            <div className={p.form}>
                <switch>
                    <Route path={regComInf} component={RegistrationCommonInf}/>
                    <Route path={regSport} component={RegistrationSport}/>
                    <Route path={regFriends} component={RegistrationFriends}/>
                </switch>
            </div>
            <div className={p.footer}>
                Уже есть аккаунт?
                <div>
                    <NavLink className={p.linkLogIn} to="/authorizationCommonInf">
                        Войти
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Registration;