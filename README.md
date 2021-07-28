# Travelp

## Technologies/Languauges
- Flask
- React/Redux
-  [Google Places Api](https://developers.google.com/maps/documentation/places/web-service/overview?hl=en_US)
-  [Geolocation Api](https://developers.google.com/maps/documentation/geolocation/overview?hl=en_US)
-  [Geocoding Api](https://developers.google.com/maps/documentation/geocoding/overview?hl=en_US)
- TypeScript

## How to Use Travelp

1.  Go to  [https://travelp-review.herokuapp.com/](https://travelp-review.herokuapp.com/)
2.  Turn your browser location on.
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
- [ ] Implement light mode & dark mode
- [ ] Add aria
- [ ] Add ability to save favorite hotels
- [ ]

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

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.
