import React, {useState} from 'react'

import {useDispatch, useSelector} from "react-redux";
//ONE HOTEL
function HotelTile({hotel}){
    const reviews = hotel["reviews"]

    return (
        <>
                <div>
                    {reviews.map(review=> (
                        <div>
                            <h1>{review.author_name}</h1>
                            <h2>{review.text}</h2>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default HotelTile;
