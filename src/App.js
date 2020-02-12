import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/yeti/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          Inicio
        </div>
        
      </Router>
    );
  }
}

export default App;

// https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
