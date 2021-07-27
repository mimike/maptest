import React, {useState, useEffect} from 'react';
import {fetchNearbyLodgingData} from "../../store/hotels"
import {useDispatch, useSelector} from "react-redux";
import HotelTile from "../HotelTile"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//shows our hotels component aka result //localhost:/PLACES
function Hotels(){
    const dispatch = useDispatch();
    const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))

    const handleFindNearbyByHotels = async() => {
        console.log(navigator.permissions, "NGL")
        const navigatorStatus = await navigator.permissions.query({name:"geolocation"})
        const navigatorState = navigatorStatus.state
        if(navigatorState === "denied") {
            alert("u must enable location")
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                    dispatch(fetchNearbyLodgingData(position.coords.latitude, position.coords.longitude))
              })
        }
    }


    return (
        <>
            <Button style={{color: "white"}} onClick={handleFindNearbyByHotels}>Find Hotels Nearby</Button>

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
