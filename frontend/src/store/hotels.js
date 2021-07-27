// const fetch = require('node-fetch')
const GET_HOTELS = "hotels/GET_HOTELS"
const LOADING = "hotels/LOADING"

const getHotels= (dataWithReviews) => ({
    type: GET_HOTELS,
    payload: dataWithReviews
})
const isLoading = () => ({
    
})

export const fetchNearbyLodgingData = (lat, lng) => async (dispatch) => {
    console.log("we get here")
    const response = await fetch(`/api/hotels/${lat}/${lng}`)
    const data = await response.json()
    dispatch(getHotels(data))
};


export const fetchGeocoder = (address, city, state) => async (dispatch) => {

    const response = await fetch(`/api/hotels/search/${address}/${city}/${state}`)
    if(response.ok){
        const {lat, lng} = await response.json()
        dispatch(fetchNearbyLodgingData(lat, lng))
    }

}

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
