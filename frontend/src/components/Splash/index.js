import React, {useState, useEffect} from 'react';
import Search from "../Search"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {fetchNearbyLodgingData} from "../../store/hotels"
import Hotels from "../Hotels"
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography"
import {makeStyles} from '@material-ui/core/styles'
import "./Splash.css"

const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 15,
      color: "white",
      background: "linear-gradient(45deg, #333, #999)",
      padding: '5px 20px'
    }
  })

function ButtonStyled(){
    const classes = useStyles()
    return <Button className={classes.root}>test styled</Button>
}

function Splash(){
    const history = useHistory();
    const dispatch = useDispatch();
    const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))

    console.log(hotelsData, "nhoteldadta!")
    useEffect(()=> {
        //dispatch(fetchNearbyLodgingData())
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log("!!!", position.coords.latitude)
            if(position.coords.latitude){
                dispatch(fetchNearbyLodgingData(position.coords.latitude, position.coords.longitude))
            }
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }, [dispatch])

    const handleClick = () => {
        history.push("/places")
    }

    return (
        <>
            <div className="App">
            <Search/>
            <header className="App-header">
            <Typography variant="h3" component="div" >Welcome to Ikigai</Typography>
            <Typography variant="h2">Travel's Return</Typography>
            <ButtonStyled />

            <TextField
                variant="filled"
                color="secondary"
                type="search"
                styles={{
                background: "white"
                }}

                label="Location"
                value=""
            />



            </header>
        </div>
        <button onClick = {handleClick}>explore</button>

        <div className="hotels-container">
                {hotelsData?.map(hotel => {
                    return (
                        <div>
                            <p>{hotel.result.name}</p>

                        </div>

                 )
                })}
        </div>
        <div>
            <Hotels hotelsData = {hotelsData} />
        </div>
      </>
    )
}
export default Splash;
