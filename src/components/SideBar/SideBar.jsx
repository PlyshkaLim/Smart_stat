import React from "react";
import p from "./SideBar.module.css";
import logoClose from "../../images/logoSideBarClose.png";
import logoOpen from "../../images/logoSideBarOpen.png";
import calendarIcon from "../../images/calendarIcon.png";
import statIcon from "../../images/statIcon.png";
import profileIcon from "../../images/profileIcon.png";
import exitIcon from "../../images/exitIcon.png";
import {NavLink} from "react-router-dom";


class SideBar extends React.Component {
// const SideBar = () => {
    constructor(props) {
        super(props);
        this.state = {
            buttonClose: true,
        }
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton() {
        this.setState(prevState => ({
            buttonClose: !prevState.buttonClose
        }));
    }

    render() {
        return (
            <div className={p.sideBarOpen}>
                <div className={this.state.buttonClose ? p.sidebarClose : p.sidebarOpen}>
                    <img src={logoClose} alt={"logoClose"} className={p.logoClose}/>
                    <img src={logoOpen}
                         hidden={this.state.buttonClose}
                         alt={"logoOpen"}
                         className={p.logoOpen}/>
                    <br/>

                    <button onClick={this.disableButton}
                            className={this.state.buttonClose ? p.open : p.close}>
                    </button>

                    {/*<a className={p.active} href="#home">
                        <img src={homeIcon} alt={"homeIcon"}/>
                        <span hidden={this.state.buttonClose}>Главная страница</span>
                    </a>*/}
                    <NavLink to='/calendar/day'>
                        <img src={calendarIcon} alt={"calendarIcon"}/>
                        <span hidden={this.state.buttonClose}>Календарь</span>
                    </NavLink>
                    <NavLink to='/statistic'>
                        <img src={statIcon} alt={"statIcon"}/>
                        <span hidden={this.state.buttonClose}>Статистика</span>
                    </NavLink>
                    <NavLink to='/my_profile'>
                        <img src={profileIcon} alt={"profileIcon"}/>
                        <span hidden={this.state.buttonClose}>Мой профиль</span>
                    </NavLink>
                    <NavLink to='/authorization'>
                        <img src={exitIcon} alt={"exitIcon"}/>
                        <span hidden={this.state.buttonClose}>Выйти</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default SideBar;