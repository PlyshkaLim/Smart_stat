const ADD_MARK = "ADD-MARK";
const GET_MARKS = "GET-MARKS";
const TOGGLE_EVENT_MODAL = "TOGGLE-EVENT-MODAL";
const TOGGLE_NOTE_MODAL = "TOGGLE-NOTE-MODAL";
const TOGGLE_MARKER_MODAL = "TOGGLE-MARKER-MODAL";

let initialState = {
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
}

const calendarReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MARK: {
            return {...state, marks: state.marks};
        }
        case GET_MARKS: {
            return state.marks;
        }
        case TOGGLE_EVENT_MODAL: {
            return {
                ...state,
                isEventModalOpen: !state.isEventModalOpen
            }
        }
        case TOGGLE_NOTE_MODAL: {
            return {
                ...state,
                isNoteModalOpen: !state.isNoteModalOpen
            }
        }
        case TOGGLE_MARKER_MODAL: {
            return {
                ...state,
                isMarkerModalOpen: !state.isMarkerModalOpen
            }
        }
        default:
            return state;
    }
}
export const addMark = (color, markText) => ({
    type: ADD_MARK, color, markText
})
export const getMarks = () => ({
    type: GET_MARKS
})
export const changeToggleEventModal = () => ({
    type: TOGGLE_EVENT_MODAL
})

export default calendarReduser;