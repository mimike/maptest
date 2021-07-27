import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import Search from "../Search"
import Hotels from "../Hotels"
import Button from '@material-ui/core/Button'
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

    // const handleClick = () => {
    //     history.push("/places")
    // }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Typography variant="h2" component="div" >Welcome to TraVelp</Typography>
                    <Typography variant="h3">A collection of Hotel Reviews</Typography>
                {/* {ButtonStyled(handleClick)} */}
                    <Hotels className="hotel-container"/>
                <Search/>
                </header>
            </div>
      </>
    )
}
export default Splash;
