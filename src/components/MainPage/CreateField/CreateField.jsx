import React from "react";
import p from "./CreateField.css";
import CloseIcon from "../../common/CloseIcon";
import Clock from "../../common/Clock";
import AddParticipant from "../../common/AddParticipant";
import ToggleButton from "../../common/ToggleButton";

const CreateField = () => {
    return (
        <div className={p.modal}>
            <div className={p.modalContent}>
                <div className={p.closeIcon} onClick={this.closeField}>
                    <CloseIcon/>
                </div>
                <div className={p.heading}>Создать событие</div>
                <div className={p.input}>
                    <input value={'Наименование'}/>
                </div>
                <div className={p.radio}>
                    <input type="radio" name="drink" value="rad1"/> Тренировка<br/>
                    <input type="radio" name="drink" value="rad2"/> Соревнование<br/>
                    <input type="radio" name="drink" value="rad3"/> Встреча<br/>
                </div>
                <div className={p.date}>
                    <Clock/>
                    <input value={'Дата события'}/>
                    <input value={'Время'}/>
                </div>
                <div className={p.checkbox}>
                    <input type='checkbox'/> Весь день
                </div>
                <div className={p.select}>
                    <select>
                        <option>Не повторять</option>
                        <option>Не повторять2</option>
                        <option>Не повторять3</option>
                        <option>Не повторять4</option>
                    </select>
                </div>
                <div className={p.participant}>
                    <AddParticipant/>
                    <select>
                        <option disabled selected>Выберите героя</option>
                        <option>Участник 1</option>
                        <option>Участник 2</option>
                        <option>Участник 3</option>
                    </select>
                </div>
                <div className={p.marker}>
                    <select>
                        <option disabled selected>Маркер</option>
                        <option>Маркер 1</option>
                        <option>Маркер 2</option>
                        <option>Маркер 3</option>
                    </select>
                </div>
                <div className={p.reminder}>
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
                <div className={p.checkbox}>
                    <input type='checkbox'/> Показывать комментарий только мне
                </div>
                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateField;