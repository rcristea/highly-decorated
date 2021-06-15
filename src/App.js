import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Landing } from './components/landing/Landing'
import { Home } from './components/home/Home'
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
