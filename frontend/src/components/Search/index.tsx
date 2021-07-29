
import React from 'react';
import {Typography,  Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"
import { TypographyProps } from '@material-ui/core/Typography';
import GoogleMaps from "../GoogleMaps"
import Loader from "react-loader-spinner";
import "./Search.css"
//this search box (they didnt have their location turned on)needs to dispatch fetchGeocoder
function Search(){
    // const attrs: TypographyProps = {
    //     // does this work?
    //     fontWeight: "200" as "inherit"
    //   }
    return (
        <>
            <div className ="search-container">

                <div className="by-destination-container">
                    <Typography className="search-by-text"
                    // style={{marginTop: "20px", marginBottom:"20px"}} variant="h6"
                    >Search hotels by your destination</Typography>
                    <div className="input-search"><GoogleMaps/></div>
                    <Typography className="or-text"
                    // style={{marginTop: "16px", fontWeight:"200"}} variant="h6"
                    >or</Typography>
                </div>
            </div>

        </>
    )
}
export default Search;
  // const [loaded, setLoaded] = useState(false)
    // if there is a search input, we use geoCoder with address else, we use fetchNearbyLodgingData(lat, lng)
    //Hotels (places) component we need to pass search input to Hotels component
    // const handleSubmit = (e:FormEvent) => {
    //     e.preventDefault()
    //     if(search){  //does this block need to go into the useEffect
    //         dispatch(fetchGeocoder({search}))
    //     } //else do fetchNearyby
    //     //setSearch(e.target.value)
    //     //console.log("here", e.target.value)
    //     console.log(search, "search!")
    //     // dispatch(fetchGeocoder(e.target.value))
    //     history.push('/places')
    // }
