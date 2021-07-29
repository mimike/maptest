import os
import requests

from flask import Blueprint, jsonify, redirect, request

hotel_routes = Blueprint('hotels', __name__)

api_key = os.environ.get("API_KEY")

@hotel_routes.route('/<string:lat>/<string:lng>')
def hotel_data(lat, lng):
    google_key = os.environ.get("API_KEY")
    #geolocator

    # places
    
    response = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?key={google_key}&radius=5000&type=lodging&location={lat}%2C+{lng}&rankby=prominence")
    data = response.json()
    place_id_list = [place["place_id"] for place in data["results"]]
    places = []
    for place_id in place_id_list:
        response = requests.get(f"https://maps.googleapis.com/maps/api/place/details/json?placeid={place_id}&key={google_key}")
        # reviews added
        places.append(response.json())

    #data3 = requests.get(f"https://maps.googleapis.com/maps/api/place/details/json?placeid={place_id}&key={google_key}")

    return jsonify(places)

@hotel_routes.route("/search/<string:location>/")
def user_location(location):
    google_key = os.environ.get("API_KEY")
     #geocode

    data1 = requests.get(f"https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={google_key}")
    data = data1.json()
    # grab the lat/lng
    return data["results"][0]["geometry"]["location"]
