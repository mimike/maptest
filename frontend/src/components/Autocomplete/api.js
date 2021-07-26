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
