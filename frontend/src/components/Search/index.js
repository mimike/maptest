
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from 'material-ui-search-bar'
import {useTheme} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { fetchNearbyLodgingData, fetchGeocoder } from '../../store/hotels';
import {Typography, Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"
import GoogleMaps from "../GoogleMaps"
import Loader from "react-loader-spinner";
//this search box (they didnt have their location turned on)needs to dispatch fetchGeocoder
function Search(){
    const dispatch = useDispatch;
    const history = useHistory();
    const [search, setSearch] = useState("")
    // const [loaded, setLoaded] = useState(false)
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
            <div>
                <Typography style={{marginBottom:"20px"}} variant="h6">Search hotels by your destination</Typography>
            </div>
            <GoogleMaps/>


            {/* </AppBar> */}

        </>
    )
}
export default Search;
