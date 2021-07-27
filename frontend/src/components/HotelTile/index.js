import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Typography from "@material-ui/core/Typography"
import "./HotelTile.css"

function HotelTile({hotel}){
  const useStyles = makeStyles({
    root: {
      marginTop: "20px",
      marginBottom: "20px",
      fontFamily: "'Raleway', sans-serif",
    },
  });
  const classes = useStyles()

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
                        <Typography variant="h3"><a className={classes.root} href={hotelWebsite}>{hotelName}</a></Typography>
                        <Typography className={classes.root} variant="h5">{hotelAddress}</Typography>
                        <Typography className={classes.root} variant="h5">{hotelPhone}</Typography>
                        <Typography className={classes.root}variant="h5"> {hotelRating ? `Rating ${hotelRating}` : "No rating"}</Typography>

                    {reviews?  reviews.map(review=> (
                        <div className = "review-container" className={classes.root}>
                            <div style={{marginBottom:"20px"}}>
                              <Typography variant="h7">{review.text}</Typography>
                            </div>
                            {!review["text"] ? "" : <div style={{marginBottom:"30px"}}className = "review-author-box">
                              <Avatar style={{marginRight:"10px"}} alt="review author avatar" src={`${review.profile_photo_url}`}/>
                              <Typography variant="h7">{review.author_name}</Typography>
                            </div>}


                        </div>
                    )): <Typography className={classes.root}> 0 reviews</Typography>}
                    </div>
                </div>
        </>
    )
}

export default HotelTile;
// import React, {useState} from 'react'
// import {useDispatch, useSelector} from "react-redux";
// import { makeStyles } from '@material-ui/core/styles';
// import { Avatar } from '@material-ui/core';
// import Typography from "@material-ui/core/Typography"
// import "./HotelTile.css"

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     small: {
//       width: theme.spacing(3),
//       height: theme.spacing(3),
//     },
//     large: {
//       width: theme.spacing(7),
//       height: theme.spacing(7),
//     },
//   }));

// function HotelTile({hotel}){

//     const reviews = hotel["reviews"]

//     const hotelName = hotel["name"]
//     const hotelWebsite = hotel["website"]
//     const hotelAddress = hotel["vicinity"]
//     const hotelPhone = hotel["formatted_phone_number"]
//     const hotelRating = hotel["rating"]

//     return (
//         <>
//                 <div className = "tile-container">
//                     <div className= "single-hotel-tile">
//                         <Typography variant="h3"><a className="hotel-link" href={hotelWebsite}>{hotelName}</a></Typography>
//                         <Typography variant="h5">{hotelAddress}</Typography>
//                         <Typography variant="h5">{hotelPhone}</Typography>
//                         <Typography variant="h5"> {hotelRating ? `Rating ${hotelRating}` : "No rating"}</Typography>

//                     {reviews ?  reviews.map(review=> (
//                         <div className = "review-container">
//                             <div style={{marginBottom:"20px"}}>
//                               <Typography variant="h7">{review.text}</Typography>
//                             </div>
//                             <div style={{marginBottom:"30px"}}className = "review-author-box">
//                               <Avatar style={{marginRight:"10px"}} alt="review author avatar" src={`${review.profile_photo_url}`}/>
//                               <Typography variant="h7">{review.author_name}</Typography>
//                             </div>
//                         </div>
//                     )): <h1>No reviews</h1>}
//                     </div>
//                 </div>
//         </>
//     )
// }

// export default HotelTile;
