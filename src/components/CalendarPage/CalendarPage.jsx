import React from "react";
import css from "./CalendarPage.module.css";
import SideBar from "../SideBar/SideBar";
import {NavLink, Redirect, Route} from "react-router-dom";
import CalendarDay from "./CalendarDay/CalendarDay";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarMonth from "./CalendarMonth/CalendarMonth";
import CreateMarkerModal from "../Modals/CreateMarkerModal/CreateMarkerModal";
import CreateEventModal from "../Modals/CreateEventModal/CreateEventModal";
import CreateNoteModal from "../Modals/CreateNoteModal/CreateNoteModal";
import MarkerItem from "./MarkerItem/MarkerItem";

//export default class CalendarPage extends React.Component {
const CalendarPage = () => {
    const state={
        markers: [
            {id: 1, color: '#D0F4FF', text: 'Младшая группа'},
            {id: 2, color: '#FEFCD6', text: 'Индивидуальная тренировка'},
            {id: 3, color: '#FFF4E2', text: 'Соревнования'},
            {id: 4, color: '#CCFFCB', text: 'Старшая группа'},
        ]
    }
    let marks = state.markers.map(mark => <MarkerItem color={mark.color} text={mark.text}/>);

    return (<>
            <div className={css.mainPage}>
                <div className={css.sideBar}>
                    <SideBar/>
                </div>
                <div className={css.calendarContent}>
                    <div className={css.navbar}>
                        <NavLink activeClassName={css.activeLink} to='/calendar/day'>День</NavLink>
                        <NavLink activeClassName={css.activeLink} to='/calendar/week'>Неделя</NavLink>
                        <NavLink activeClassName={css.activeLink} to='/calendar/month'>Месяц</NavLink>
                    </div>
                    <div className={css.createButton}>
                        <div id={css.components} className={css.item}>
                            <div className={css.buttonCreate}>
                                <button>Создать</button>
                            </div>
                            <span className={css.polygon}/>
                            <div className={css.submenu}>
                                <div className={css.submenu_item}><CreateEventModal/></div>
                                <div className={css.submenu_item}><CreateNoteModal/></div>
                            </div>
                        </div>
                    </div>
                    <div className={css.miniCalendar}>
                        June 2020
                        <input type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>
                    <div className={css.marker}>
                        {marks}
                        <CreateMarkerModal/>
                    </div>
                    <div className={css.calendar}>
                        <switch>
                            <Route path="/calendar/day" component={CalendarDay}/>
                            <Route path="/calendar/week" component={CalendarWeek}/>
                            <Route path="/calendar/month" component={CalendarMonth}/>
                            <Redirect from="/calendar" to="/calendar/day"/>
                        </switch>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CalendarPage;