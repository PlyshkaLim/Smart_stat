import React from "react";
import styles from "./CalendarDay.module.css";
import CircleSVG from "../../common/CircleSVG";
import CreateField from "../CreateField/CreateField";
import ArrowDown from "../../common/ArrowDown";
import CloseIcon from "../../common/CloseIcon";
import Calendar from "../Calendar/Calendar";
import Clock from "../../common/Clock";
import AddParticipant from "../../common/AddParticipant";
import ToggleButton from "../../common/ToggleButton";
import {NavLink} from "react-router-dom";


class CalendarDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qwe: true, //change on true
        };
        this.open = this.open.bind(this);
        this.closeField = this.closeField.bind(this);
    }

    open() {
        this.setState(state => ({
            qwe: !state.qwe
        }));
    }

    closeField() {
        this.setState(state => ({
            qwe: !state.qwe
        }));
    }


    render() {
        return (<>
            <div className={this.state.qwe ? styles.fieldHidden : styles.fieldVisible}>

                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.closeIcon} onClick={this.closeField}>
                            <CloseIcon/>
                        </div>
                        <div className={styles.heading}>Создать событие</div>
                        <div className={styles.input}>
                            <input value={'Наименование'}/>
                        </div>
                        <div className={styles.radio}>
                            <input type="radio" name="drink" value="rad1"/> Тренировка<br/>
                            <input type="radio" name="drink" value="rad2"/> Соревнование<br/>
                            <input type="radio" name="drink" value="rad3"/> Встреча<br/>
                        </div>
                        <div className={styles.date}>
                            <Clock/>
                            <input value={'Дата события'}/>
                            <input value={'Время'}/>
                        </div>
                        <div className={styles.checkbox}>
                            <input type='checkbox'/> Весь день
                        </div>
                        <div className={styles.select}>
                            <select>
                                <option>Не повторять</option>
                                <option>Не повторять2</option>
                                <option>Не повторять3</option>
                                <option>Не повторять4</option>
                            </select>
                        </div>
                        <div className={styles.participant}>
                            <AddParticipant/>
                            <select>
                                <option disabled selected>Выберите героя</option>
                                <option>Участник 11</option>
                                <option>Участник 2</option>
                                <option>Участник 3</option>
                            </select>
                        </div>
                        <div className={styles.marker}>
                            <select>
                                <option disabled selected>Маркер</option>
                                <option>Маркер 1</option>
                                <option>Маркер 2</option>
                                <option>Маркер 3</option>
                            </select>
                        </div>
                        <div className={styles.reminder}>
                            Напоминание о событии
                            <ToggleButton/>
                        </div>
                        <div>
                            <select>
                                <option disabled selected>За сколько напомнить о событии?</option>
                                <option>За 1</option>
                                <option>За 2</option>
                                <option>За 3</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option disabled selected>План тренировки</option>
                                <option>Хорошо поспать</option>
                                <option>Хорошо покакать</option>
                                <option>Хорошо покушать</option>
                            </select>
                        </div>
                        <div>
                            <textarea placeholder={'Комментарий'}>
                            </textarea>
                        </div>
                        <div className={styles.checkbox}>
                            <input type='checkbox'/> Показывать комментарий только мне
                        </div>
                        <div>
                            <button>Save</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.calendarDay}>

                {/*<div className={styles.buttonCreate}  >*/}
                {/*    <button onClick={this.open} >*/}
                {/*        Создать*/}
                {/*        <ArrowDown/>*/}
                {/*    </button>*/}


                {/*</div>*/}

                <NavLink to='/components' id={styles.components}
                         className={styles.item}
                         activeClassName={`${styles.activeLink} ${styles.components}`}>
                    Создать
                    <span className={styles.polygon}/>

                    <div className={styles.submenu}>
                        <div className={styles.submenu_item}>
                            Событие
                        </div>
                        <div className={styles.submenu_item}>
                            Заметку
                        </div>
                    </div>

                </NavLink>

                <div className={styles.calendar}>
                    June 2020
                    <input type="date" id="start" name="trip-start"
                           value="2018-07-22"
                           min="2018-01-01" max="2018-12-31"/>
                </div>
                <div className={styles.calendarGroup}>
                    <div className={styles.item}>
                    <span className={styles.circle}>
                        <CircleSVG color='#D0F4FF'/>
                    </span>
                        <span className={styles.text}>Младшая группа</span>
                    </div>
                    <div className={styles.item}>
                    <span className={styles.circle}>
                        <CircleSVG color='#D0F4FF'/>
                    </span>
                        <span className={styles.text}>qqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqq
                        qqqqqqqqqq</span>
                    </div>
                    <div className={styles.item}>
                    <span className={styles.circle}>
                        <CircleSVG color='#D0F4FF'/>
                    </span>
                        <span className={styles.text}>Младшая группа</span>
                    </div>
                    <div className={styles.item}>
                    <span className={styles.circle}>
                        <CircleSVG color='#D0F4FF'/>
                    </span>
                        <span className={styles.text}>Младшая группа</span>
                    </div>
                </div>
                <div className={styles.calendarMap}>
                    Понедельник, 14 июня
                    <Calendar/>
                </div>
            </div>
        </>)
    }
}

export default CalendarDay;