import React from "react";
import css from "./CreateMarkerModal.module.css";
import GreyPlus from "../../common/GreyPlus";
import CloseIcon from "../../common/CloseIcon";

export default class CreateMarkerModal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <div className={css.addMarker} onClick={() => {
                    this.setState({isOpen: true})
                }}>
                    <GreyPlus/>
                    <div className={css.addMarker_text}>
                        Добавить маркер
                    </div>
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
                                    Создать маркер
                                </div>
                                <div className={css.colorSelect}>
                                    <div className={css.colorSelectInput}>
                                        <input type='text' value={'Наименование'}/>
                                    </div>
                                    <div className={css.colorSelectColor}>
                                        <input className={css.colorChange} type='color'/>
                                    </div>
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