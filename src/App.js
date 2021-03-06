import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/user/:UserId">
            <UserDetail />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
