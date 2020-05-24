import React from 'react';
// import Navbar from './components/Navbar'
import Ooo from './pages/OooPage'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component<{}> {

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ooo" component={Ooo} />
          </Switch>
        </Router>

      </React.Fragment>
    )
  }
}


export default App;
