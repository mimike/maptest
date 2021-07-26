import React, {useState} from 'react'
// import { useFetch } from "react-async"
import {useDispatch, useSelector} from "react-redux";
import HotelTile from "../HotelTile"


//shows our hotels component aka result //localhost:/places
function Hotels(){
    const hotelsData = Object.values(useSelector(state => state?.hotelsReducer))


    return (
        <>
            <h1> YOOOOO</h1>
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
