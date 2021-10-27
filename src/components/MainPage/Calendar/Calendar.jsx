import React from "react";
import p from './Calendar.module.css';

const qwe = {
    visibility: 'hidden '
}

const CalItem = (props) => {
    return (
        <div className={p.calendarItem}>
            <div className={p.time}>{props.time}</div>
            <div className={p.event}>
                <div className={p.block} style={qwe}/>
                <div className={p.event1}/>
                <div className={p.event2}/>
            </div>
        </div>
    )
}

const Calendar = () => {
    let timeArray = [];
    for (let i = 0; i <= 24; i++) {
        timeArray.push(i + ':00');
    }
    let lines = timeArray.map((item) => <CalItem time={item}/>);
    return (
        <div className={p.calendar}>
            {lines}
        </div>
    )
}

export default Calendar;