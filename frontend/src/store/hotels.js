const GET_HOTELS = "hotels/GET_HOTELS"

const getHotels= (dataWithReviews) => ({
    type: GET_HOTELS,
    payload: dataWithReviews
})

export const fetchNearbyLodgingData = (lat, lng) => async (dispatch) => {
    const response = await fetch(`/api/hotels/${lat}/${lng}`)
    const data = await response.json()
    dispatch(getHotels(data))
};

export const fetchGeocoder = (location) => async (dispatch) => {
    const parsedLocation = location.replaceAll(",", "").replaceAll(" ", "+")

     const response = await fetch(`/api/hotels/search/${parsedLocation}/`)
     if(response.ok){
         const {lat, lng} = await response.json()
        dispatch(fetchNearbyLodgingData(lat, lng))
    }
}

const initialState = {}
export default function hotelsReducers(hotels = initialState, action){
    switch(action.type){
        case GET_HOTELS:
            return action.payload
        default:
            return hotels
    }
}
