import React from "react";
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class AuthorizationContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Authorization {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => ({
    login: state.auth.login,
    password: state.auth.password,
});

export default connect(mapStateToProps,
    {getAuthUserData})(AuthorizationContainer);