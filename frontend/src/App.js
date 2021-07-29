import React from 'react';
import Splash from './components/Splash'
// import Hotels from "./components/Hotels"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css'

function App(){

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Splash/>
          </Route>

          {/* <Route path="/places">
            <Hotels/>
          </Route> */}

        </Switch>
    </BrowserRouter>
  )
}

export default App;
