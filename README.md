# Leave-Now

## Technologies & Technical Challenges

There will be three pages:
 - Splash/loading page
 - Home: receive user input
 - Flight Index: list of all relevant flights
 - Flight Show: flight details

The primary technical challenges will be:
 - Parsing the api data to display the relevant flights
 - Storing the search results in the state to limit api requests when viewing the details of different options
 - Only displaying flights departing within the next 12 hours of the current time

 The user will select a max price, return date, and airport. The app will send a request to the Skyscanner API (adding the current date and time). It will then parse the returned data to only include flights within the next 12 hours.

## Group Members & Work Breakdown
Our group consists of three members: Craig Scott, Chris Bryd, Maria Belgrader

Craigs's primary responsibilities will be:

Chris's primary responsibilities will be:

Maria's primary responsibilities will be:

## Implementation Timeline

**Day 1**:
  - Setup React Native
  - Setup webpack

**Day 2**:
  - Connect Skyscanner api

**Day 3**:

**Day 4**:

**Day 5**:

**Bonus Features (TBD)**:
  - [ ] Geolocation to find nearest airports
  - [ ] Weather of destination
  - [ ] Optional no layover
  - [ ] Images of destination
  - [ ] Cesium globe on show page with pin for destination
