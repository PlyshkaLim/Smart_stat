import React from "react";
import p from "./Registration.module.css";
import {NavLink, Route} from "react-router-dom";
import RegistrationSport from "./RegistrationSport/RegistrationSport";
import RegistrationFriends from "./RegistrationFriends/RegistrationFriends";
import RegistrationCommonInf from "./RegistrationCommonInf/RegistrationCommonInf";

const Registration = () => {
    return (
        <div className={p.registration}>
            <div className={p.header}>
                <span>1 Общие данные</span>
                <span>2 О спорте</span>
                <span>3 Друзья</span>
            </div>
            <div className={p.form}>
                <switch>
                    <Route path="/registration/registrationCommonInf" component={RegistrationCommonInf}/>
                    <Route path="/registration/registrationSport" component={RegistrationSport}/>
                    <Route path="/registration/registrationFriends" component={RegistrationFriends}/>
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