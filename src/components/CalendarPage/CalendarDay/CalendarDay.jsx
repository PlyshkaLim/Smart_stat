import React from "react";
import styles from "./CalendarDay.module.css";
import Calendar from "../../MainPage/Calendar/Calendar";

class CalendarDay extends React.Component {
    render() {
        return (<>
            <div className={styles.calendarDay}>
                <div className={styles.calendarMap}>
                    Понедельник, 14 июня
                    <Calendar/>
                </div>
            </div>
        </>)
    }
}

export default CalendarDay;