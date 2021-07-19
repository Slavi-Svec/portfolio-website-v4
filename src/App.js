import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScollToTop'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import WorkPage from './pages/WorkPage/WorkPage'
import ContactPage from './pages/Contact/Contact'
import FormSuccessPage from './pages/FormSuccess/FormSuccessPage'

const App = () => (
  <>
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/success" component={FormSuccessPage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  </>
)

export default App
