# Travelp



## Technologies/Languauges
- Flask
- React/Redux
-  [Google Places Api](https://developers.google.com/maps/documentation/places/web-service/overview?hl=en_US)
-  [Geolocation Api](https://developers.google.com/maps/documentation/geolocation/overview?hl=en_US)
-  [Geocoding Api](https://developers.google.com/maps/documentation/geocoding/overview?hl=en_US)
- TypeScript

## How to Use Ikigai:

1.  Go to  [https://hangin-hangin.herokuapp.com/](https://hangin.herokuapp.com/)
2.  Recommended that your browser location is turned on
3.  If not, enter your city, state or full address in the search bar to start exploring nearby lodging!


## Instructions
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
    - Note: Create a `.env` file in root dir and add your Google API key as `REACT_APP_API_KEY`


## Features Overview

`Travelp` is a hotel finder application that displays hotels nearby. 

The [Google Api](https://console.cloud.google.com/apis/library?project=genuine-tuner-154003&rif_reserved) was used to collect this data. 

# Overall Structure
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white%22%3E" /> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white%22/%3E" /> 
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white%22%3E" />
<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"/>
<img alt="Material UI" src="https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white"/>
<img alt="Flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
<img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>

## To Do
- [ ] Add search functionality
- [ ] Add React Autocomplete
- [ ] Add ability to save favorite hotels

