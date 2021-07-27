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

function ButtonStyled(handleClick){
    const classes = useStyles()
    return <Button onClick={handleClick} className={classes.root}>Explore</Button>
}

function Splash(){
    const history = useHistory();
    const dispatch = useDispatch();
    const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))


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

                {ButtonStyled(handleClick)}
                </header>
        </div>
      </>
    )
}
export default Splash;
