
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from 'material-ui-search-bar'
import {useTheme} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { fetchNearbyLodgingData, fetchGeocoder } from '../../store/hotels';
import {Typography, Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"

function Search(){
    const dispatch = useDispatch;
    const history = useHistory();

    const [search, setSearch] = useState("")
    const handleSubmit = (e) => {
        //setSearch(e.target.value)
        e.preventDefault()
        //console.log("HEre", e.target.value)
        console.log(search, "search!")
        // dispatch(fetchGeocoder(e.target.value))
        // history.push('/places')
    }
    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <form onSubmit= {handleSubmit}>
                        {/* <SearchBar
                            value={search}
                            onChange={onType}
                        /> */}

                        <SearchBar
                        type="text"
                        autoComplete="off"
                        id="header-search"
                        placeholder="Search"
                        value = {search}
                        name="s"
                        onChange = {(e) => {setSearch(e.target.value)}}/>
                    
                </form>

             <Typography  variant="h6">Ikigai</Typography>
                </Toolbar>
            </AppBar>
            <main>

            </main>
        </>
    )
}
export default Search;
