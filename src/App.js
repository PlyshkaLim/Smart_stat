import './App.css';
import Authorization from "./components/Authorization/Authorization";
import {
    BrowserRouter,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/authorization" component={Authorization}/>
                    <Route path="/registration" component={Registration}/>
                    <Redirect from="/" to="/authorization"/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
