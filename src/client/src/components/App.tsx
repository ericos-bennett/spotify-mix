import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import Home from './Home';
import Room from './Room';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route
          path="/room/:id"
          render={() => (Cookie.get('accessToken') ? <Room /> : <Redirect to="/" />)}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
