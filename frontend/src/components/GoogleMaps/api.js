import { useFetch } from "react-async"
const fetch = require('node-fetch')
import fetch from "node-fetch"
// const fetchNearbyLodgingData = async () => {
//     let coordinate = {}
//         //get their lat/lng location
//        const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`;
//        let response = await fetch(url, {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify({}),
//        });
//        const data = await response.json();
//        console.log("data", data);
//        const { location } = data;
//        let { lat, lng } = location;
//          console.log(lat, lng, "coordinates");
//          coordinate.lat = lat
//          coordinate.lng = lng

//        //get the lodging nearby
//        const secondUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${coordinate.lat}%2C${coordinate.lng}&rankby=prominence`;

//        let responseTwo = await fetch(secondUrl);
//        const dataWithoutReviews = await responseTwo.json();
//        const parameter = {
//          placeId: dataWithoutReviews["results"][0].place_id,
//        };

//        //get data with reviews
//        const responseThree = await fetch(
//          `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
//        );
//        const dataWithReviews = await responseThree.json();
//        console.log("data with reviews start", dataWithReviews.result, "data with reviews end")
//        return {
//            dataWithReviews,
//            coordinate
//        }

//    };

//    console.log("!!!", fetchNearbyLodgingData(), "!!!!")
// const fetch = require('node-fetch')
// const fetchNearbyLodgingData = async () => {
//   let coordinate = {}
//   //get their lat/lng geolocation
//   const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`;
//   let response = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({}),
//   });
//   const data = await response.json();
//   // console.log("data", data);
//   const { location } = data;
//   let { lat, lng } = location;
//   // console.log(lat, lng, "coordinates");
//   coordinate.lat = lat
//   coordinate.lng = lng
//   //get the lodging nearby
//   const secondUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${coordinate.lat}%2C${coordinate.lng}&rankby=prominence`;

//   let responseTwo = await fetch(secondUrl);
//   const dataWithoutReviews = await responseTwo.json();
//   const parameter = {
//     placeId: dataWithoutReviews["results"][0].place_id,
//   };

//   //get data with reviews
//   const responseThree = await fetch(
//     `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
//   );
//   const dataWithReviews = await responseThree.json();
//   // console.log("data with reviews start", dataWithReviews.result, "data with reviews end")
//   return {
//     dataWithReviews,
//     coordinate
//   }
// };

// async function test() {
//   const testOutput = await fetchNearbyLodgingData()
//   console.log(testOutput)
// }

// test()
export const FetchNearbyLodgingData = async () => {
  let coordinate = {}
      //get their lat/lng geolocation
     const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`;
     let response = useFetch(url, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({}),
     });
     const data = await response.json();
     console.log("data", data);
     const { location } = data;
     let { lat, lng } = location;
       console.log(lat, lng, "coordinates");
       coordinate.lat = lat
       coordinate.lng = lng
     //get the lodging nearby
     const secondUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${coordinate.lat}%2C${coordinate.lng}&rankby=prominence`;

     let responseTwo = useFetch(secondUrl);
     const dataWithoutReviews = await responseTwo.json();
     const parameter = {
       placeId: dataWithoutReviews["results"][0].place_id,
     };

     //get data with reviews
     const responseThree = useFetch(
       `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
     );
     const dataWithReviews = await responseThree.json();
     console.log("data with reviews start", dataWithReviews.result, "data with reviews end")
     return {
         dataWithReviews,
         coordinate
     }
 };

 import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Redirect, NavLink, Link } from 'react-router-dom';
import { thunk_getPictureByDate, thunk_reset } from '../../../store/picOfDay';
import Loader from "react-loader-spinner";
import ReactPlayer from 'react-player';
import getRandomDate from './randomDateFunction.js';

export default function PicByDay () {
const history = useHistory()
const dispatch = useDispatch();
const {date} = useParams();
    let [loaded, setLoaded] = useState(true);
    let [errors, setErrors] = useState('');



async function handleRandomClick() {
    let randomDate = getRandomDate(1995,2021,1,12);
    setLoaded(true)
    await dispatch(thunk_getPictureByDate(randomDate))
    setLoaded(false)
    history.push(`/picture-of-the-day/archive/${randomDate}`)


}

const goBack = () => {

   history.goBack();

};
//make pic on home page dynamic of pic of day
    useEffect(() => {
        dispatch(thunk_getPictureByDate(date)).then((data) => {
            if (data?.error) {
                setErrors(data.error)
                setLoaded(false);
            } else {
                setLoaded(false);

            }
        })
    }, [dispatch]);

    const currentImage = useSelector((state) => state.picOfDay.url);
    const mediaType = useSelector((state) => state.picOfDay.media_type);
    const HDpic = useSelector((state) => state.picOfDay.hdurl);
    const curDate = useSelector((state) => state.picOfDay.date);
    const title = useSelector((state) => state.picOfDay.title);
    const copyright = useSelector((state) => state.picOfDay.copyright);
    const explanation = useSelector((state) => state.picOfDay.explanation);



    if (loaded) {
        return (
            <div className='loader'>
                <h2>Loading...</h2>
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        )
    }

    return (
        <>

            <header className='bg-light text-center pic-header'>
                <div className='container container--narrow'>
                    <h2>APOD Archive</h2>
                    <p>{curDate}</p>
                </div>
            </header>
            <a className='go-back' onClick={goBack} >Go Back</a>
            <a className='random-date' onClick={handleRandomClick}>Random Date</a>
            <div className='error_div'>
                {errors.length ?
                    errors.map((error, i) => <p key={i}>{error}</p>)
                    : null
                }
            </div>

            <section className='pic-section'>
                <div className='image-container'>
                    <p>{title}</p>
                    {mediaType != 'video' ?
                    <a href={`${HDpic}`} target='_blank'>
                        <img className='image' src={currentImage} alt='Nasas photo of the day' ></img>
                    </a>  : <ReactPlayer url={currentImage} controls={true} />}
                    {copyright &&
                        <p className='copyright'>Image Credit & Copyright: {copyright}</p>
                    }
                    <p className='explanation'>{explanation}</p>
                </div>
            </section>
        </>
    )
}
