import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>{/* <Route component={}/> */}</Switch>
      </Router>
    </div>
  );
}

export default App;
