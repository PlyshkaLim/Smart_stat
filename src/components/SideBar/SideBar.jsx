import React from "react";
import p from "./SideBar.module.css";
import logoClose from "../../images/logoSideBarClose.png";
import logoOpen from "../../images/logoSideBarOpen.png";
import homeIcon from "../../images/homeIcon.png";
import calendarIcon from "../../images/calendarIcon.png";
import statIcon from "../../images/statIcon.png";
import profileIcon from "../../images/profileIcon.png";


class SideBar extends React.Component {
// const SideBar = () => {
    constructor(props) {
        super(props);
        this.state = {
            qwe: true,
        }
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton() {
        this.setState(prevState => ({
            qwe: !prevState.qwe
        }));
    }

    render() {
        return (
            <div className={p.sideBar}>
                <div className={this.state.qwe ? p.sidebarClose : p.sidebar}>
                    <img src={logoClose} alt={"logoClose"} className={p.logoClose}/>
                    <img src={logoOpen} hidden={this.state.qwe} alt={"logoOpen"} className={p.logoOpen}/>
                    <br/>

                    <button onClick={this.disableButton}
                            className={this.state.qwe ? p.open : p.close}>
                    </button>

                    <a className={p.active} href="#home">
                        <img src={homeIcon} alt={"homeIcon"}/>
                        <span hidden={this.state.qwe}>Главная страница</span>
                    </a>
                    <a href="#calendar">
                        <img src={calendarIcon} alt={"calendarIcon"}/>
                        <span hidden={this.state.qwe}>Календарь</span>
                    </a>
                    <a href="#stat">
                        <img src={statIcon} alt={"statIcon"}/>
                        <span hidden={this.state.qwe}>Статистика</span>
                    </a>
                    <a href="#profile">
                        <img src={profileIcon} alt={"profileIcon"}/>
                        <span hidden={this.state.qwe}>Мой профиль</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar;