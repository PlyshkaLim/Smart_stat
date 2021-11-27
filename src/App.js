import React from "react";
import css from './App.css';
import {
    BrowserRouter,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className={css.app}>
                <Switch>
                    <Route path="/authorization" component={Authorization}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/calendar" component={CalendarPage}/>
                    <Route path="/my_profile" component={Profile}/>
                    <Redirect from="/" to="/authorization"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
