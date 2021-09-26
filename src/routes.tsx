import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './pages/Home'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
export default Routes