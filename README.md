# Welcome to Travelp!
<a href="https://ibb.co/0rPqw0Z"><img src="https://i.ibb.co/jD7hpCG/Screen-Shot-2021-07-29-at-10-51-14.png" alt="Screen-Shot-2021-07-29-at-10-51-14" border="0"></a>


## General Info

[Travelp](https://travelp-review.herokuapp.com/) is a hotel finder application that finds reviews of hotels within 15 miles of a user's current location or destination by search.

## Overall Structure
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white%22%3E" /> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white%22/%3E" />
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white%22%3E" />
<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"/>
<img alt="Material UI" src="https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white"/>
<img alt="Flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
<img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>

## Technologies

- React
- Redux
-  JavaScript / TypeScript
-  Flask
-  [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview?hl=en_US)
-  [Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en_US)
-  [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview?hl=en_US)

## How to Use Travelp

1.  Go to  [https://travelp-review.herokuapp.com/](https://travelp-review.herokuapp.com/)
2.  Turn your browser location on to search by location or search by destination.

## Main Technical Features

Travelp is a web application where users can browse hotel reviews by geolocation or select their destination in a search box.

The Google API was used to collect this data.

If users turn their browser's location on, we make a call to Google Places API with their location's latitude and longitude with the type set to lodging. The radius is set to 25140 meters. We make a second call to the Google Places API with the place id to collect data on hotel reviews.

For users who choose to block their location, we collect their latitude and longitude by geocoding the location they type into a search box. Users type into a search box which displays a dropdown of autocomplete locations by making a call to https://maps.googleapis.com/maps/api/js?key=${api_key}&libraries=places. Material UI's Autocomplete component with Google Maps API and Places Library.

Here is the route for collecting hotel data for a user's location if they have their browser's location turned on:

<a href="https://ibb.co/f8GTL0K"><img src="https://i.ibb.co/XykGMJd/Screen-Shot-2021-07-28-at-18-27-16.png" alt="Screen-Shot-2021-07-28-at-18-27-16" border="0"></a>

The greatest challenge was implementing and learning TypeScript in a short amount of time. I strived to make it work, make it fast and make it clean and made a strategic decision to build something that worked while implementing new libraries and 3rd party APIs. The challenge of debugging TypeScript meant I had to make a critical decision of deploying with Javascript. 

## UI Design

The app is designed to be accessibility, mobile and desktop friendly and makes use of semantic HTML.


### Mobile View:
<a href="https://ibb.co/NKmWKkL"><img src="https://i.ibb.co/4pY4pDj/227606128-262422648618433-1726009377737091873-n.png" alt="227606128-262422648618433-1726009377737091873-n" border="0"></a>


### Desktop View:
<a href="https://ibb.co/vmPpcF7"><img src="https://i.ibb.co/nfc9wGH/Screen-Shot-2021-07-29-at-10-34-35.png" alt="Screen-Shot-2021-07-29-at-10-34-35" border="0"></a>

### Material UI Autocomplete Dropdown:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/Jpw0tWR/Screen-Shot-2021-07-28-at-17-50-31.png" alt="Screen-Shot-2021-07-28-at-17-50-31" border="0"></a>

### Loading Indicator:

<a href="https://ibb.co/vzkYQy3"><img src="https://i.ibb.co/Lp15Jjx/Screen-Shot-2021-07-28-at-17-51-43.png" alt="Screen-Shot-2021-07-28-at-17-51-43" border="0"></a>

### Hotel Reviews: 
<a href="https://ibb.co/BN87WDH"><img src="https://i.ibb.co/dgn3C9s/Screen-Shot-2021-07-28-at-17-53-13.png" alt="Screen-Shot-2021-07-28-at-17-53-13" border="0"></a>

## High Level Architectural Overview

This app uses the MVC architencture pattern. In this iteration of the app, we do not have a database that users can post to, our Google API collects the data that we render to the page.
Our view is represented by React rendering to the DOM.
Finally, the controller- we can think of the controller as the client side JS - the controlling layer between the data and what is presented in the UI.

## Near Future Goals

- [ ] Implement light mode & dark mode features with Material UI
- [ ] Allow users to filter options by radius
- [ ] Add photos of hotels
- [ ] Allow users to display hotel reviews by highest rating or vicinity


## Setup
1. Clone repo `git clone https://github.com/mimike/mapstest.git .`
2. Run this command under the root directory to install backend dependences

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
   Run this command from the frontend directory
   
      ```bash
      npm install
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
    - Start backend server `flask run`
    - Start client server in the frontend directory `npm start`
    - Note: The [Google API](https://console.cloud.google.com/apis/library?project=genuine-tuner-154003&rif_reserved) was used to collect this data. Create a `.env` file in root dir and add your Google API key as `REACT_APP_API_KEY`

