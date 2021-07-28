import React, {useState} from 'react';
import Search from './components/Search'
import Splash from './components/Splash'
import Hotels from "./components/Hotels"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import './App.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography"
import {makeStyles} from '@material-ui/core/styles'

const App = (): JSX.Element => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Splash/>
          </Route>

          <Route path="/places">
            <Hotels/>
          </Route>

        </Switch>
    </BrowserRouter>
  )
}

export default App;
