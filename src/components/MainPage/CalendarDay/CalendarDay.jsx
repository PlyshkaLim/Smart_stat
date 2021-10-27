import React from "react";
import p from "./CalendarDay.module.css";
import Calendar from "../Calendar/Calendar";


const CalendarDay = () => {
    return (
        <div className={p.calendarDay}>
            <div className={p.buttonCreate}>
                <button>
                    Создать
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="#6A8CAF" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={p.calendar}>
                June 2020
                <input type="date" id="start" name="trip-start"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31"/>

            </div>
            <div className={p.calendarGroup}>
                <div className={p.item}>
                    <span className={p.circle}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D0F4FF"/>
</svg>
                    </span>
                    <span className={p.text}>Младшая группа</span>
                </div>
                <div className={p.item}>
                    <span className={p.circle}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D0F4FF"/>
</svg>
                    </span>
                    <span className={p.text}>qqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqq</span>
                </div>
                <div className={p.item}>
                    <span className={p.circle}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D0F4FF"/>
</svg>
                    </span>
                    <span className={p.text}>Младшая группа</span>
                </div>
                <div className={p.item}>
                    <span className={p.circle}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D0F4FF"/>
</svg>
                    </span>
                    <span className={p.text}>Младшая группа</span>
                </div>
            </div>
            <div className={p.calendarMap}>
                Понедельник, 14 июня
                <div className={p.calendarLine}>
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default CalendarDay;