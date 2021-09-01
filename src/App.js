import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>{/* <Route component={}/> */}</Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
