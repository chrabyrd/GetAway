# Leave-Now

## Motivation

While the market is already saturated with airline booking applications, the majority of them focus on either booking a specific flight, or finding the lowest-priced flight available for a certain time period. However there is a growing section of users who search for flights leaving immediately, with less regard for price or date. LeaveNow fills this niche for spontaneous users, who want a destination-agnostic, moderately priced international flight that leaves as soon as possible.

## Minimum Viable Product

Using LeaveNow, users will be able to:

- [ ] Use geolocation to find the user's closest airport.
- [ ] Return a list of round-trip flights leaving from that airport in the next 24 hours.
- [ ] Show a 5-day weather forecast for each destination.
- [ ] Redirect users through an affiliate link to a site where they can book the flight of their choice.

##WireFrames

![splash](wireframes/Splash_load.png)
![home screen](wireframes/home screen.png)
![Index](wireframes/Index.png)
![Show Page](wireframes/Show Page.png)

## Technologies & Technical Challenges

There will be three pages:
  - Splash/loading page
  - Home: receive user input
  - Flight Index: list of all relevant flights

The primary technical challenges will be:
  - Parsing the api data to display the relevant flights
  - Storing the search results in the state to limit api requests when viewing the details of different options
  - Only displaying flights departing within the next 24 hours of the current time

The user will select a max price, return date, and airport. The app will send a request to the Skyscanner API (adding the current date and time). It will then parse the returned data to only include flights within the next 24 hours.

## Group Members & Work Breakdown

Our group consists of two members: Chris Bryd, Maria Belgrader

Each team member will be responsible for:
  - Researching and understanding the Skyscanner API
  - Selecting a splash/loading image and color palatte

Chris's primary responsibilities will be:
  - Researching geolocation
  - Setting up the API requests
  - Setting up the application state

Maria's primary responsibilities will be:
  - Setting up pages and routes
  - Splash and loading screens
  - Index page with styling
  - Home page with styling
  - Live site / App store

## Implementation Timeline

**Day 1**: Setup environment & select color scheme (Team Day)
  - Basic Setup
    - React Native
    - Redux
  - Choose Color Scheme:
    - Each person picks a splash image and color palatte

**Day 2**: Setup API, state, and pages
  - Get familiar with Skyscanner API (T)
  - Setup API (CS)
    - Research geolocation Skyscanner option(zipcode)
  - Setup application state (CB)
  - Setup pages (MB)

**Day 3**: Build out pages with details and style
  - Home (CS)
  - Index (MB)
  - Show (CB)
  - Splash/Loading (T)

**Day 4**: 9am Team meeting to finish up features and launch to ios/andriod stores
  - Styling
  - Error handling
  - Wrap up outstanding features
  - Push to the App Store and Google Play

**Day 5**: Final touches and bonus features (Team Day)
  - Polish and look for bugs
  - Decide on bonus features and begin implementation

**Bonus Features (TBD)**:
  - [ ] Geolocation to find all nearby airports
  - [ ] Optional no layover
  - [ ] Images of destination
  - [ ] Cesium globe on show page with pin for destination
