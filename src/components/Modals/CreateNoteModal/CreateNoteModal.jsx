import React from "react";
import css from "./CreateNoteModal.module.css";
import CloseIcon from "../../common/CloseIcon";

export default class CreateNoteModal extends React.Component {
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
                    Заметку
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
                                Создать заметку
                            </div>
                            <div className={css.input}>
                                <input value={'Наименование'}/>
                            </div>
                            <div className={css.textareaNote}>
                            <textarea placeholder={'Текст заметки'}>

                            </textarea>
                            </div>
                            <div className={css.buttonsNote}>
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