import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Landing } from './components/landing/Landing'
import { Home } from './components/home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
