
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Tutors from './Components/Tutors/Tutors';

function App() {
  return (
    <Router>
      <Link to="/notfound">Also Will Not Match</Link>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/courses">
          <Course />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tutors">
          <Tutors />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
