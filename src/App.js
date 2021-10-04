import './App.css';
import {
    BrowserRouter,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import Authorization from "./components/Authorization/Authorization";
import RegistrationCommonInf from "./components/Registration/RegistrationCommonInf/RegistrationCommonInf";
import RegistrationSport from "./components/Registration/RegistrationSport/RegistrationSport";
import RegistrationFriends from "./components/Registration/RegistrationFriends/RegistrationFriends";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path="/authorization" component={Authorization}/>
                    <Route path="/registrationCommonInf" component={RegistrationCommonInf}/>
                    <Route path="/registrationSport" component={RegistrationSport}/>
                    <Route path="/registrationFriends" component={RegistrationFriends}/>
                    <Redirect from="/" to="/authorization"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
