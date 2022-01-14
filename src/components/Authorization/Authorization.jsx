import React from "react";
import css from "./Authorization.module.css";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const AuthorizationForm = (props) => {
    return (
        <div className={css.authorization}>
            <div className={css.logo}>
                <span className={css.logoFirstPart}>SMART</span>
                <span className={css.logoSecondPart}>STAT</span>
            </div>

            <form className={css.form} onSubmit={props.handleSubmit}>
                <div className={css.formField}>
                    <Field component={"input"}
                           name={"login"}
                           type={"text"}
                           placeholder={"Логин или электронная почта"}/>
                </div>
                <div className={css.formField}>
                    <Field component={"input"}
                           name={"password"}
                           type={"password"}
                           placeholder={"Пароль"}/>
                </div>
                <div className={css.q}>
                    Забыли пароль?
                </div>
                <button>
                    <div className={css.buttonLogIn}>
                        <NavLink to={"/calendar/Day"}>
                            Войти
                        </NavLink>
                    </div>
                </button>
            </form>

            <div className={css.buttonReg}>
                <NavLink to={"/registration/registrationCommonInf"}>
                    Регистрация
                </NavLink>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(AuthorizationForm)

const Authorization = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    }

    return (<>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default connect(null,{login})(Authorization);