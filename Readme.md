# React Movie Db

This is an app for a recruiting assignment, the requirements are very simple

Build a UI to search the Movie DB: The user should be able to enter some text into a search field, see
and browse the results from the Movie DB.

## Usage
```
yarn
yarn start
```

## Constraint
there are two major constraint: time, around 3/4 hours and not not use frameworks or state management systems, we can argue that react is 
a framework but it was specifically whitelisted :DB

## Execution

I started by adding the same code as react-init-app would generate but manually, lucky for me VScode has a bunch of useful snippet
to speed up this kind of stuff, once that was done I create the module to interact with the MovieDB, because there was no node.js in this
assignment (shame!) I spent a little bit more time writing the module, throwing in some functional programming for some parts of it
just for fun, no real needs.

Everything was TDD for the high level components, unfortunately TDD is a bit more time consuming so once i 
moved to the UI I had to speed up a bit so I wrote and tested the code manually and then wrote super simple tests that can be extended in the future.
I iterated through the UI defining the behaviour first and then creating the components to implement the behaviour.

For the search results I used a container component as Dan Abramov described (here)[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0] because
I had the need to have something that was managing the HTTP requests but I couldn't use a state management tool, I've added code docs and missing tests in the extended

## Next step
I'll deploy the App through my personal CI/CD so I'll be able to show it deployed

## What I would've done differently 
With  a bit more time I would've:
- tested Everything
- ensure 100% code coverage (hopefully)
- provided a docker file and a docker-compose.yml ready to go
- put a bit more thought on the app structure