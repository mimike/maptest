
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from 'material-ui-search-bar'
import {useTheme} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { fetchNearbyLodgingData, fetchGeocoder } from '../../store/hotels';
import {Typography, Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"
//this search box (they didnt have their location turned on)needs to dispatch fetchGeocoder
function Search(){
    const dispatch = useDispatch;
    const history = useHistory();
    const [search, setSearch] = useState("")
    // if there is a search input, we use geoCoder with address else, we use fetchNearbyLodgingData(lat, lng)
    //Hotels (places) component we need to pass search input to Hotels component

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search){  //does this block need to go into the useEffect
            dispatch(fetchGeocoder({search}))
        } //else do fetchNearyby
        //setSearch(e.target.value)
        //console.log("here", e.target.value)
        console.log(search, "search!")
        // dispatch(fetchGeocoder(e.target.value))
        history.push('/places')
    }
    return (
        <>
            <CssBaseline/>
            {/* <AppBar position="relative"> */}
                <Toolbar>
                    <form onSubmit= {handleSubmit}>
                        <input
                        type="text"
                        autoComplete="off"
                        id="header-search"
                        placeholder="Search"
                        value = {search}
                        name="s"
                        onChange = {(e) => {setSearch(e.target.value)}}/>
                </form>


             <Typography  variant="h6">Search hotels by your destination</Typography>
                </Toolbar>
            {/* </AppBar> */}

        </>
    )
}
export default Search;
