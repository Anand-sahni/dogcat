import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FileUpload from './components/FileUpload';
import './App.css';
import Home from './components/Home';
import Dog from './components/Dog';
import Cat from './components/Cat';


const App = () => (

  <Router>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dog">
          <Dog />
        </Route>
        <Route path="/cat">
          <Cat />
        </Route>
        <Route path="/fileupload">
          <FileUpload />
        </Route>
      </Switch>
  </Router>
);

export default App;
