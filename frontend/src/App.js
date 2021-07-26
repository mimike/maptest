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

function App(){

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

// import { ChangeEvent } from "react";
// import usePlacesAutocomplete from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from "@reach/combobox";

// import PlacesAutocomplete from "./component/Autocomplete";


// function App() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue
//   } = usePlacesAutocomplete();

//   const handleInput = (e)=> {
//     setValue(e.target.value);
//   };

//   const handleSelect = (val)=> {
//     setValue(val, false);
//   };
//   const renderSuggestions = () => {
//       const suggestions = data.map(({ place_id, description }) => (
//           <ComboboxOption key={place_id} value={description} />
//           ));

// console.log("28", ready, value, suggestions)
//           return (
//       <>
//         {suggestions}
//         <li className="logo">
//           <img
//             src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
//             alt="Powered by Google"
//           />
//         </li>
//       </>
//     );
//   };

//   return (
//     <div className="App">
//       <h1 className="title">USE-PLACES-AUTOCOMPLETE</h1>
//       <p className="subtitle">
//         React hook for Google Maps Places Autocomplete.
//       </p>
//       <Combobox onSelect={handleSelect} aria-labelledby="demo">
//         <ComboboxInput
//           style={{ width: 300, maxWidth: "90%" }}
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//         />
//         <ComboboxPopover>
//           <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//       <PlacesAutocomplete/>
//     </div>
//   );
// }

//   export default App;
