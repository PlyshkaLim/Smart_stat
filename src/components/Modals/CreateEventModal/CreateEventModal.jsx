import React from "react";
import css from "./CreateEventModal.module.css";
import CloseIcon from "../../common/CloseIcon";
import Clock from "../../common/Clock";
import AddParticipant from "../../common/AddParticipant";
import ToggleButton from "../../common/ToggleButton";

export default class CreateEventModal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <div className={css.submenu_item}
                     onClick={() => {
                         this.setState({isOpen: true})
                     }}>
                    Событие
                </div>
                {this.state.isOpen && (
                    <div className={css.vis}>
                        <div className={css.modal}>
                            <div className={css.modal_body}>
                                <div className={css.closeIcon}
                                     onClick={() => {
                                         this.setState({isOpen: false})
                                     }}>
                                    <CloseIcon/>
                                </div>
                                <div className={css.heading}>
                                    Создать событие
                                </div>
                                <div className={css.input}>
                                    <input value={'Наименование'}/>
                                </div>
                                <div className={css.radio}>
                                    <input type="radio" name="drink" value="rad1"/> Тренировка<br/>
                                    <input type="radio" name="drink" value="rad2"/> Соревнование<br/>
                                    <input type="radio" name="drink" value="rad3"/> Встреча<br/>
                                </div>
                                <div className={css.date}>
                                    <div className={css.clockIcon}>
                                        <Clock/>
                                    </div>
                                    <div className={css.dateMain}>
                                        <div className={css.dateTime}>
                                            <div className={css.dateInput}>
                                                <input placeholder={'Дата события'} type={'date'}/>
                                            </div>
                                            <div className={css.timeInput}>
                                                <input value={'Время'} type={"time"}/>
                                            </div>
                                        </div>
                                        <div className={css.checkbox}>
                                            <input type='checkbox'/>
                                            <span className={css.checkboxText}>
                                    Весь день
                                </span>
                                        </div>
                                        <div className={css.select}>
                                            <select>
                                                <option>Не повторять</option>
                                                <option>Не повторять2</option>
                                                <option>Не повторять3</option>
                                                <option>Не повторять4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.participant}>
                                    <div className={css.participantIcon}>
                                        <AddParticipant/>
                                    </div>
                                    <select className={css.participantSelect}>
                                        <option disabled selected>Добавить участников</option>
                                        <option>Участник 11</option>
                                        <option>Участник 2</option>
                                        <option>Участник 3</option>
                                    </select>
                                </div>
                                <div className={css.marker}>
                                    <select>
                                        <option disabled selected>Маркер</option>
                                        <option>Маркер 1</option>
                                        <option>Маркер 2</option>
                                        <option>Маркер 3</option>
                                    </select>
                                </div>
                                <div className={css.reminder}>
                                    <div className={css.reminderText}>
                                        Напоминание о событии
                                    </div>
                                    <div className={css.reminderToggleButton}>
                                        <ToggleButton/>
                                    </div>
                                </div>
                                <div className={css.reminderTime}>
                                    <select>
                                        <option disabled selected>За сколько напомнить о событии?</option>
                                        <option>За 1</option>
                                        <option>За 2</option>
                                        <option>За 3</option>
                                    </select>
                                </div>
                                <div className={css.selectWorkoutPlan}>
                                    <select>
                                        <option disabled selected>План тренировки</option>
                                        <option>Хорошо поспать</option>
                                        <option>Хорошо покакать</option>
                                        <option>Хорошо покушать</option>
                                    </select>
                                </div>
                                <div className={css.comment}>
                            <textarea placeholder={'Комментарий'}>
                            </textarea>
                                </div>
                                <div className={css.checkbox}>
                                    <input type='checkbox'/>
                                    <div className={css.checkboxText}>
                                        Показывать комментарий только мне
                                    </div>
                                </div>
                                <div className={css.buttons}>
                                    <button className={css.buttonSave}>
                                        Сохранить
                                    </button>
                                    <button className={css.buttonCancel}
                                            onClick={() => {
                                                this.setState({isOpen: false})
                                            }}>
                                        Отменить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}