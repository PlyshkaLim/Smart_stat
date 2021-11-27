import calendarReduser from "./calendar-reducer";

let store = {
    _state: {
        calendarPage: {
            marks: [
                {
                    id: 1,
                    color: "#D0F4FF",
                    text: "Младшая группа"
                },
                {
                    id: 2,
                    color: "#FEFCD6",
                    text: "Индивидуальная тренировка"
                },
                {
                    id: 3,
                    color: "#FFF4E2",
                    text: "Соревнования"
                },
                {
                    id: 4,
                    color: "#CCFFCB",
                    text: "Старшая группа"
                },
            ],
            isEventModalOpen: false,
            isNoteModalOpen: false,
            isMarkerModalOpen: false,
        },
    },

    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //паттерн - observer / publisher
    },

    dispatch(action) {
        this._state.calendarPage = calendarReduser(this._state.calendarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;