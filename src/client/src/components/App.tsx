import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  )

}