// const fetch = require('node-fetch')
const GET_HOTELS = "hotels/GET_HOTELS"

const getHotels= (dataWithReviews:object) => ({
    type: GET_HOTELS,
    payload: dataWithReviews
})

export const fetchNearbyLodgingData = (lat:string, lng:string) => async (dispatch:any) => {
    console.log("we get here")
    const response = await fetch(`/api/hotels/${lat}/${lng}`)
    const data = await response.json()
    console.log("data!", data)
    dispatch(getHotels(data))
};
// const fetchNearbyLodgingData: (lat: string, lng: string) => (dispatch: any) => Promise<void>

export const fetchGeocoder = (location:string ) => async (dispatch:any) => {
        //console.log(location.replaceAll(",", "").replaceAll(" ", "+"), "LOC")
    const parsedLocation = location.replaceAll(",", "").replaceAll(" ", "+")
     const response = await fetch(`/api/hotels/search/${parsedLocation}/`)
     if(response.ok){
         const {lat, lng} = await response.json()
         //console.log("lat", lat, "lng", lng)
        dispatch(fetchNearbyLodgingData(lat, lng))
    }
}

//Reducer
type ReducerAction = {
    type:string,
    payload:object
}
const initialState = {}
export default function hotelsReducers(hotels = initialState, action: ReducerAction ){
    switch(action.type){
        case GET_HOTELS:
            return action.payload
        default:
            return hotels
    }
}
