import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import CalendarPage from "./CalendarPage";
import MarkerItem from "./MarkerItem/MarkerItem";


class CalendarPageContainer extends React.Component {
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (<>
                <CalendarPage
                    isEventModalOpen={this.props.isEventModalOpen}
                    isNoteModalOpen={this.props.isNoteModalOpen}
                    isMarkerModalOpen={this.props.isMarkerModalOpen}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isEventModalOpen: state.calendarReduser.isEventModalOpen,
    isNoteModalOpen: state.calendarReduser.isNoteModalOpen,
    isMarkerModalOpen: state.calendarReduser.isMarkerModalOpen,
})

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(CalendarPageContainer);