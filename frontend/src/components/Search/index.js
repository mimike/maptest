
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from 'material-ui-search-bar'
import {useTheme} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { fetchNearbyLodgingData, fetchGeocoder } from '../../store/hotels';
import {Typography, Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"
import GoogleMaps from "../GoogleMaps"
import Loader from "react-loader-spinner";
import "./Search.css"
//this search box (they didnt have their location turned on)needs to dispatch fetchGeocoder
function Search(){
    const dispatch = useDispatch;
    const history = useHistory();
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search){  //does this block need to go into the useEffect
            dispatch(fetchGeocoder({search}))
        }
        console.log(search, "search!")
        history.push('/places')
    }
    return (
        <>
            <div className ="search-container">

                <div className="by-destination-container">
                    <Typography style={{marginTop: "20px", marginBottom:"20px"}} variant="h6">Search hotels by your destination</Typography>
                    <div className="input-search"><GoogleMaps/></div>
                    <Typography style={{marginTop: "16px", fontWeight:"200"}} variant="h6">or</Typography>
                </div>
            </div>
            {/* </AppBar> */}
        </>
    )
}
export default Search;
