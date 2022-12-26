import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScollToTop";
import About from "./pages/About/About";
import WorkPage from "./pages/WorkPage/WorkPage";
import ContactPage from "./pages/Contact/Contact";
import FormSuccessPage from "./pages/FormSuccess/FormSuccessPage";

const App = () => (
  <>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/success" component={FormSuccessPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  </>
);

export default App;
