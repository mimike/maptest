# Welcome to Travelp!
## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

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

- React/Redux
-  TypeScript
-  Flask
-  [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview?hl=en_US)
-  [Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en_US)
-  [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview?hl=en_US)

## How to Use Travelp

1.  Go to  [https://travelp-review.herokuapp.com/](https://travelp-review.herokuapp.com/)
2.  Turn your browser location on.

## Main Technical Features

Travelp is a web application where users can browse hotel reviews by geolocation or select their destination in a search box.

The Google API was used to collect this data.

If users turn their browser's location on, we make a call to Google Places API with their location's latitude and longitude with the type set to lodging. The radius is set to 25140 meters. We make a second call to the Google Places API with the place id to collect data on hotel reviews.

For users who choose to block their location, we collect their latitude and longitude by geocoding the location they type into a search box. Users type into a search box which displays a dropdown of autocomplete locations by making a call to https://maps.googleapis.com/maps/api/js?key=${api_key}&libraries=places. Material UI's Autocomplete component with Google Maps API and Places Library.

Here is the route for collecting hotel data for a user's location if they have their browser's location turned on:

<a href="https://ibb.co/f8GTL0K"><img src="https://i.ibb.co/XykGMJd/Screen-Shot-2021-07-28-at-18-27-16.png" alt="Screen-Shot-2021-07-28-at-18-27-16" border="0"></a>

The greatest challenge was implementing and learning TypeScript in a short amount of time. 

## UI Design

The app is designed to be accessibility, mobile and desktop friendly and makes use of semantic HTMl.


<a href="https://ibb.co/PwhHzKh"><img src="https://i.ibb.co/9sT536T/Screen-Shot-2021-07-28-at-16-19-15.png" alt="Screen-Shot-2021-07-28-at-16-19-15" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/Jpw0tWR/Screen-Shot-2021-07-28-at-17-50-31.png" alt="Screen-Shot-2021-07-28-at-17-50-31" border="0"></a>
<a href="https://ibb.co/vzkYQy3"><img src="https://i.ibb.co/Lp15Jjx/Screen-Shot-2021-07-28-at-17-51-43.png" alt="Screen-Shot-2021-07-28-at-17-51-43" border="0"></a>
<a href="https://ibb.co/BN87WDH"><img src="https://i.ibb.co/dgn3C9s/Screen-Shot-2021-07-28-at-17-53-13.png" alt="Screen-Shot-2021-07-28-at-17-53-13" border="0"></a>

## High Level Architectural Overview

This app uses the MVC architencture pattern and uses the following technologies:

Model - In this iteration of the app, we do not have database that users can post to, our Google API collects the data that we render to the page.
View - The user interface is rendered by ReactJS.
Controller - The middle man, interacts with the user, gets data from the model

## Near Future Goals

- [ ] Implement light mode & dark mode features with Material UI
- [ ] Allow users to filter options by radius
- [ ] Add photos of hotels
- [ ] Allow users to display hotel reviews by highest rating or vicinity


## Setup
1. Clone repo `git clone https://github.com/mimike/mapstest.git .`
2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Create a **.env** file based on the example with proper settings for your
   development environment
    - Install packages `npm install`
    - Start dev server `npm start`
    - Note: The [Google API](https://console.cloud.google.com/apis/library?project=genuine-tuner-154003&rif_reserved) was used to collect this data. Create a `.env` file in root dir and add your Google API key as `REACT_APP_API_KEY`




##Deploy to Heroku

To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***
