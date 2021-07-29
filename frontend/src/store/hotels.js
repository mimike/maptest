const GET_HOTELS = "hotels/GET_HOTELS"

const IS_LOADING = "hotels/IS_LOADING"
const NOT_LOADING = "hotes/NOT_LOADING"

const getHotels= (dataWithReviews) => ({
    type: GET_HOTELS,
    payload: dataWithReviews
})

export const isLoading = () => ({
    type: IS_LOADING,
})
const notLoading = () => ({
    type: NOT_LOADING,
})

export const fetchNearbyLodgingData = (lat, lng) => async (dispatch) => {
    const response = await fetch(`/api/hotels/${lat}/${lng}`)
    const data = await response.json()
    dispatch(getHotels(data))
    dispatch(notLoading())
};

export const fetchGeocoder = (location) => async (dispatch) => {
    const parsedLocation = location.replaceAll(",", "").replaceAll(" ", "+")

     const response = await fetch(`/api/hotels/search/${parsedLocation}/`)
     if(response.ok){
         const {lat, lng} = await response.json()
        dispatch(fetchNearbyLodgingData(lat, lng))
        return response
    }
}
//currentHotels 
const initialState = {currentHotels: [], loading: false}
export default function hotelsReducers(hotels = initialState, action){
    switch(action.type){
        case GET_HOTELS:
            return {...hotels, currentHotels:action.payload}
        case NOT_LOADING:
            return {...hotels, loading: false}
        case IS_LOADING:
            return {...hotels, loading: true}
        default:
            return hotels
    }
}
