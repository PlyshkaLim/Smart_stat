import React from "react";
import p from "./MainPage.module.css";
import SideBar from "../SideBar/SideBar";
import {NavLink, Redirect, Route} from "react-router-dom";
import CalendarDay from "./CalendarDay/CalendarDay";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarMonth from "./CalendarMonth/CalendarMonth";


const MainPage = () => {
    return (
        <div className={p.mainPage}>
            <div className={p.sideBar}>
                <SideBar/>
            </div>
            <div className={p.content}>
                <div className={p.navbar}>
                    <NavLink activeClassName={p.activeLink} to='/calendar/day'>День</NavLink>
                    <NavLink activeClassName={p.activeLink} to='/calendar/week'>Неделя</NavLink>
                    <NavLink activeClassName={p.activeLink} to='/calendar/month'>Месяц</NavLink>
                </div>
                <switch>
                    <Route path="/calendar/day" component={CalendarDay}/>
                    <Route path="/calendar/week" component={CalendarWeek}/>
                    <Route path="/calendar/month" component={CalendarMonth}/>
                    <Redirect from="/calendar" to="/calendar/day"/>
                </switch>
            </div>
        </div>
    )
}

export default MainPage;