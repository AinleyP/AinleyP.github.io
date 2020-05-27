import React from 'react';
// import Navbar from './components/Navbar'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'



class App extends React.Component<{}> {

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>

        <Footer />


      </React.Fragment>
    )
  }
}


export default App;
