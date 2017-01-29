# Leave-Now

## Motivation

While the market is already saturated with airline booking applications, the majority of them focus on either booking a specific flight, or finding the lowest-priced flight available for a certain time period. However there is a growing section of users who search for flights leaving immediately, with less regard for price or date. LeaveNow fills this niche for spontaneous users, who want a destination-agnostic, moderately priced international flight that leaves as soon as possible.

## Minimum Viable Product

Using LeaveNow, users will be able to:

- [ ] See a destination-agnostic list of round-trip international flights departing from their nearest airport within the next 12 hours,
- [ ] Filter this list by price,
- [ ] See a detailed view of specific information after selecting a trip,
- [ ] Access an airline's booking page through this detailed view.


##Technologies & Technical Challenges


The primary technical challenges will be:
 - Parsing the api data to display the relevant flights
 - Storing the search results in the state to limit api requests when viewing the details of different options
 - Only displaying flights departing within the next 12 hours of the current time

##Group Members & Work Breakdown
Our group consists of three members: Craig Scott, Christopher Byrd, Maria Belgrader

Craigs' primary responsibilities will be:

Chris' primary responsibilities will be:

Maria's primary responsibilities will be:

##Implementation Timeline


**Day 1**:
  - Setup React Native
  - Setup webpack

**Day 2**:
  - Connect Skyscanner api

**Day 3**:

**Day 4**:

**Day 5**:

**Bonus Features (TBD)**:
  - [ ] Geolocation
  - [ ] Weather of destination
  - [ ] Optional no layover
  - [ ] Images of destination
  - [ ] Cesium globe on show page with pin for destination
