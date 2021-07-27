import React, {useState} from 'react'
import "./HotelTile.css"
import {useDispatch, useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


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
                        <Typography variant="h2">{hotelAddress}</Typography>
                        <Typography variant="h2">{hotelPhone}</Typography>
                        <Typography variant="h3">Reviews {hotelRating}</Typography>

                    {reviews.map(review=> (
                        <div className = "review-continer">
                            {/* <h1>{hotel.name}</h1>
                            <h2>{hotel.address}</h2> */}

                            <h3>{review.text}</h3>
                            <h4>-{review.author_name}</h4>
                            <Avatar alt="Remy Sharp" src={`${review.profile_photo_url}`}  />

                            <h4>{review.relative_time_description}</h4>
                        </div>
                    ))}
                    </div>
                </div>
        </>
    )
}

export default HotelTile;
