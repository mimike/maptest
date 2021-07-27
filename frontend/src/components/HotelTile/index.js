import React, {useState} from 'react'
import "./HotelTile.css"
import {useDispatch, useSelector} from "react-redux";

function HotelTile({hotel}){

    const reviews = hotel["reviews"]
    const hotelName = hotel["name"]
    const hotelWebsite = hotel["website"]
    const hotelAddress = hotel["vicinity"]
    const hotelPhone = hotel["formatted_phone_number"]
    const hotelRating = hotel["rating"]

    return (
        <>
                <div className = "tile-container">
                    <div className= "single-hotel-tile">
                        <h1><a className="hotel-link" href={hotelWebsite}>{hotelName}</a></h1>
                        <h2>{hotelAddress}</h2>
                        <h2>{hotelPhone}</h2>
                        <h1>Reviews {hotelRating}</h1>

                    {reviews.map(review=> (
                        <div className = "review-continer">
                            {/* <h1>{hotel.name}</h1>
                            <h2>{hotel.address}</h2> */}
                            <h3>{review.text}</h3>
                            <h4>-{review.author_name}</h4>
                            <h4>{review.relative_time_description}</h4>
                        </div>
                    ))}
                    </div>
                </div>
        </>
    )
}

export default HotelTile;
