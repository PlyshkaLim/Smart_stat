import React from "react";
import styles from "./CalendarPage.module.css";
import SideBar from "../SideBar/SideBar";
import {NavLink, Redirect, Route} from "react-router-dom";
import CalendarDay from "./CalendarDay/CalendarDay";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarMonth from "./CalendarMonth/CalendarMonth";
import CreateMarkerModal from "../Modals/CreateMarkerModal/CreateMarkerModal";
import CreateEventModal from "../Modals/CreateEventModal/CreateEventModal";
import CreateNoteModal from "../Modals/CreateNoteModal/CreateNoteModal";

class CalendarPage extends React.Component {

    render() {
        return (<>
                <div className={styles.mainPage}>
                    <div className={styles.sideBar}>
                        <SideBar/>
                    </div>
                    <div className={styles.calendarContent}>
                        <div className={styles.navbar}>
                            <NavLink activeClassName={styles.activeLink} to='/calendar/day'>День</NavLink>
                            <NavLink activeClassName={styles.activeLink} to='/calendar/week'>Неделя</NavLink>
                            <NavLink activeClassName={styles.activeLink} to='/calendar/month'>Месяц</NavLink>
                        </div>
                        <div className={styles.createButton}>

                            <div id={styles.components} className={styles.item}>
                                <div className={styles.buttonCreate}>
                                    <button>Создать</button>
                                </div>

                                <span className={styles.polygon}/>

                                <div className={styles.submenu}>
                                    <div className={styles.submenu_item}>
                                        <CreateEventModal/>
                                    </div>
                                    <div className={styles.submenu_item}>
                                        <CreateNoteModal/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.miniCalendar}>
                            June 2020
                            <input type="date" id="start" name="trip-start"
                                   value="2018-07-22"
                                   min="2018-01-01" max="2018-12-31"/>
                        </div>
                        <div className={styles.marker}>
                            {/*<MarkerItem color={'#D0F4FF'} text={'Младшая группа'}/>*/}
                            {/*<MarkerItem color={'#FEFCD6'} text={'Индивидуальная тренировка'}/>*/}
                            {/*<MarkerItem color={'#FFF4E2'} text={'Соревнования'}/>*/}
                            {/*<MarkerItem color={'#CCFFCB'} text={'Старшая группа'}/>*/}
                            <CreateMarkerModal/>
                        </div>
                        <div className={styles.calendar}>
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
}


export default CalendarPage;
