import p from './App.css';
import {
    BrowserRouter,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import Authorization from "./components/Authorization/Authorization";
import MainPage from "./components/MainPage/MainPage";
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
            <div className={p.app}>
                <Switch>
                    <Route path="/authorization" component={Authorization}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/calendar" component={MainPage}/>
                    <Redirect from="/" to="/authorization"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
