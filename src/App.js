import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "../src/Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Resume from "./Components/Resume/ResumeNew";
import Gallery from "./Components/Gallery/Gallery";
import ScrollToTop from "./Components/ScrollToTop";
import "./styles.css";
import "./App.css";
import Contact from "./Components/Contact/Contact";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}
