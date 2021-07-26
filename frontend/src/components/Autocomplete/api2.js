const fetch = require('node-fetch')

const fetchLocation = async () => {
    let lat;
    let lng;
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
    let response = await fetch(
        url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        })
    })
        let objectifiedResponse = await response.json()
        const {location} = await objectifiedResponse
        // const {latitude, longitude} = location
        //console.log(location, "LOC") //{location: {lat:41}, lng: -91}, accuracy: 1695}
        lat = location["lat"] // 41
        lng = location["lng"] // -91
        return location
}

const fetchNearbyLodgingData = async () => {
    let coordinate = {}
       const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`;
       let response = await fetch(url, {
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


       const secondUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${coordinate.lat}%2C${coordinate.lng}&rankby=prominence`;

       let responseTwo = await fetch(secondUrl);
       const dataWithoutReviews = await responseTwo.json();
       const parameter = {
         placeId: dataWithoutReviews["results"][0].place_id,
       };


       const responseThree = await fetch(
         `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
       );
       const dataWithReviews = await responseThree.json();
       console.log(dataWithReviews.result)
       return {
           dataWithReviews,
           coordinate
       }

   };
fetchLocation().then((lat) => console.log(lat, "LAT!!"))

const fetchNearbyLodgingData = async(lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&radius=5000&type=lodging&location=${lat}%2C${lng}&rankby=prominence`

    let response = await fetch(
        url
    )

    if(!response.ok){
        throw new Error("Something went wrong")
    }

    const dataWithoutReviews = await response.json();

    const parameter = {
        placeId: dataWithoutReviews["results"][0].place_id
    }
    response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${parameter.placeId}&key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE`
    )
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const dataWithReviews = await response.json();
    console.log("UMMM", (dataWithReviews))
    return dataWithReviews;
}
