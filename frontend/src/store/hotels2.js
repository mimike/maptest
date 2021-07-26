
const fetch = require('node-fetch')

const GET_HOTELS = "hotels/GET_HOTELS"

const getHotels= (dataWithReviews) => ({
    type: GET_HOTELS,
    payload: dataWithReviews
})

export const fetchNearbyLodgingData = () => async (dispatch) => {
    console.log("this happened!")
  let coordinate = {}
  //get their lat/lng geolocation
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`;
  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
  const data = await response.json();
  console.log(data, "data 21!!");
  const { location } = data;
  let { lat, lng } = location;
  // console.log(lat, lng, "coordinates");
  coordinate.lat = lat
  coordinate.lng = lng
  //get the lodging nearby
  console.log("28 line")


  const secondUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${coordinate.lat}%2C+${coordinate.lng}&rankby=prominence`;
  //const test = window.gapi.client.request({"path": secondUrl})
  window.gapi.load("client", () => {
      const test2 = window.gapi.client.request({"path": secondUrl})
      console.log(test2, "test2!!")
      //console.log(window.gapi.client, "wfc!")
  })
  console.log(window.gapi.load, "after TEST fetch")
  let responseTwo = await fetch(secondUrl);
  console.log(responseTwo, "response2")
  const dataWithoutReviews = await responseTwo.json();
  console.log("35")
  const parameter = {
    placeId: dataWithoutReviews["results"][0].place_id,
  };
  console.log(parameter.placeId, "ppid!")
  //get data with reviews
  const responseThree = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
  );
  console.log("number 3 happened")
  // console.log("data with reviews start", dataWithReviews.result, "data with reviews end")
  if(responseThree.ok){
      const dataWithReviews = await responseThree.json();
        dispatch(getHotels(dataWithReviews))
    }
//   return {
//     dataWithReviews,
//     coordinate
//   }
};

//Reducer
const initialState = {}
export default function hotelsReducers(hotels = initialState, action){
    switch(action.type){
        case GET_HOTELS:
            return action.payload
        default:
            return hotels
    }
}
