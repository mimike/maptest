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
                        <Typography variant="h3"><a className="hotel-link" href={hotelWebsite}>{hotelName}</a></Typography>
                        <Typography variant="h3">{hotelAddress}</Typography>
                        <Typography variant="h4">{hotelPhone}</Typography>
                        <Typography variant="h4">Reviews {hotelRating}</Typography>

                    {reviews.map(review=> (
                        <div className = "review-continer">
                            {/* <h1>{hotel.name}</h1>
                            <h2>{hotel.address}</h2> */}

                            <Typography variant="h7">{review.text}</Typography>
                            <Typography>-{review.author_name}</Typography>
                            <Avatar alt="review author avatar" src={`${review.profile_photo_url}`}  />
                        </div>
                    ))}
                    </div>
                </div>
        </>
    )
}

export default HotelTile;
