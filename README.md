# Fun with redux!
## Getting started
`yarn install`

`yarn start-next`

Then open http://localhost:3008/ in your browser

(* npm also works, but yarn is faster)

## Background
This application was created to show how strong the force is in React and Redux. Use it as example, training,
learning, or just break it down in pieces and tell us what we did wrong. It uses the Star Wars API, which can be found on http://swapi.co/, to have some data to show.

To use as little boilerplate as possible, the app uses the Next framework (https://github.com/zeit/next.js).

## Challenges
The first two challenges can be solved without having to touch anything in Redux-land.

1. Make `ItemDisplay` detect what kind of object it has received, and change display based on that
2. Sort the list of items alphabetically
3. The `ItemDisplay` component contains a button that expands or collapses a JSON dump. It does so by holding it's own state.
Rewrite this to use redux.
4. Rewrite the existing `onChooseEndpoint` action creator to cache data, instead of fetching it every one changes endpiont
5. Make more changes - use your imagination!


## Notes - what you could improve

### Lighthouse test
I did a [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) test in Chrome 60 to see if there were some apparent issues found by Lighthouse.

The result showed major issues in 2 out of 4 areas:
![Lighthouse resulta](./img/lighthouse.gif)

**TODO**: Dive into the report and focus on the issues.

### improvements

* `UI`: Rendering of JSON in some not-so-nerded form :-)
* `Routing`: Add relevant app state to URL, like what the visitor wants to see (for instance: `/people/Luke Skywalker`) for instance when sharing a view.
* 
