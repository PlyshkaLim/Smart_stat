import React from "react";
import p from "../CalendarDay/CalendarDay.module.css";
import ArrowDown from "../../common/ArrowDown";

class CalendarWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qwe: false, //change on true
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
        return (
            <div>
                <div className={p.buttonCreate}>
                    <button onClick={this.open}>
                        Создать
                        <ArrowDown/>
                    </button>
                </div>
            </div>
        )
    }
}

export default CalendarWeek;