import React, {useState, useEffect} from 'react';
import {fetchNearbyLodgingData} from "../../store/hotels"
import {useDispatch, useSelector} from "react-redux";
import HotelTile from "../HotelTile"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

//shows our hotels component aka result //localhost:/PLACES
function Hotels(){
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
        return <Button onClick={handleClick} className={classes.root}>Find hotels nearby</Button>
    }

    const dispatch = useDispatch();
    const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))

    const handleFindNearbyByHotels = async() => {
        //checks to see if user has their location turned on
        const navigatorStatus = await navigator.permissions.query({name:"geolocation"})
        const navigatorState = navigatorStatus.state
        if(navigatorState === "denied") {
            alert("You must have location enabled to search for hotels.")
        } else {

            navigator.geolocation.getCurrentPosition(function(position) {
                    dispatch(fetchNearbyLodgingData(position.coords.latitude, position.coords.longitude))
                })
        }
    }

    return (
        <>
            {/* <Button style={{color: "white"}} onClick={handleFindNearbyByHotels}>Find Hotels Nearby</Button> */}
            {ButtonStyled(handleFindNearbyByHotels)}
            {/* <div style={{color: "white"}}>{loading ? "Loading!!!!!!!!!!!!!" : "" }</div> */}

            <div className="hotels-container">
                {hotelsData?.map(hotel => {
                    return (
                    <HotelTile key={hotel?.id} hotel={hotel.result} />
                 )
                })}
            </div>

        </>
    )
}

export default Hotels;
