import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import News from './Components/News'
import Contact from './Components/Contact'


const App = () => {
  return (
    <Router basename="/sunandsungroup.com">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default App

