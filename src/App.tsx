import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {IBug} from "./Abstractions/Abstractions";
import BugTable from "./components/BugTable/BugTable";
import './App.css';
import NavigationBar from "./components/Navigation/NavigationBar";
import BugOverview from "./pages/bugOverview/BugOverview";
import CreateBug from "./pages/createBug/CreateBug";

class App extends Component {

  render() {

    return (
      <div className="App">

          <NavigationBar/>

          <BrowserRouter>
              <Switch>
                  <Route exact path='/bugs' component={BugOverview}/>
                  <Route exact path='/createBug' component={CreateBug}/>
              </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
