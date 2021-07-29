import React, {useState} from 'react';
import {fetchNearbyLodgingData} from "../../store/hotels"
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import HotelTile from "../HotelTile"
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 0,
      borderRadius: 15,
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
      textTransform: "lowercase",
      fontFamily: 'Raleway',
      background: "#00589b",
        "&:hover": {
      background: "#c21d1d",
  },
      padding: '5px 20px',
      marginTop: "20px",
      marginBottom: "20px",
    },
}),
);

function Hotels() {
      function ButtonStyled(handleClick: () => void){
        const classes = useStyles()
        return <Button onClick={handleClick} className={classes.root}>Hotels Near You</Button>
    }
    const dispatch = useDispatch();
    const hotelsData = Object.values(
        // @ts-ignore
        useSelector((state) =>  state?.hotelsReducer)
        )
    const [loaded, setLoaded] = useState<boolean>(false)

    const handleFindNearbyByHotels = async() => {
        setLoaded(true)
        //checks to see if user has their location turned on
        const navigatorStatus = await navigator.permissions.query({name:"geolocation"})
        const navigatorState = navigatorStatus.state
        if(navigatorState === "denied") {
            alert("You must have location enabled to search for hotels.")
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLoaded(true)
                // @ts-ignore
                dispatch(fetchNearbyLodgingData(position.coords.latitude, position.coords.longitude))
                // @ts-ignore
                .then(() => {
                    setLoaded(false)
                })
            })
        }

    }

    return (
        <div className = "hotel-container">

            <div style={{textAlign:"left"}}>
            {ButtonStyled(handleFindNearbyByHotels)}
            </div>
            {loaded && <div className='loader'>
                <h2>Loading...</h2>
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>}

            <div className="hotels-container" style={{textAlign: "left"}}>
                {hotelsData?.map(hotel => {
                    return (
                    // @ts-ignore
                    <HotelTile key={hotel?.id} hotel={hotel.result}  />
                 )
                })}
            </div>
        </div>
    )
}

export default Hotels;
