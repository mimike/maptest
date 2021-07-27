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
      marginTop: "10px",
      color: "white",
      background: "red",
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
                    <i className="fas fa-bed" style={{
                        fontSize:"24px", marginBottom:"-40px", borderRadius: "50%", padding:"20px", background:"slategray", color:"white", fill: "rgb(255, 255, 255)"
                        }}></i>
                    {/* <Typography variant="h2" component="div" >TraVelp</Typography> */}
                    <h1 style={{
                        fontWeight: "bold700",
                        marginBottom: "2px",
                        fontSize: "64px",
                        fontStyle: "normal",
                        color: "rgb(28, 187, 155)"
                    }}>travelp</h1>
                    <Typography variant="h3">a collection of hotel reviews</Typography>
                {/* {ButtonStyled(handleClick)} */}
                    <Hotels className="hotel-container"/>
                <Search/>
                </header>
            </div>
      </>
    )
}
export default Splash;
