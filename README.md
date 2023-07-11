# Pokedex Companion App
> https://pokemon-companion-app-beta2.surge.sh/

## Introduction
*Pokedex Companion App* is a complete Pokedex App wich shows all relevant information about Pokemons for all Generations.

It currently fetch its data through https://pokeapi.co/, https://pokeres.bastionbot.org and through custom jsons.

Information about a Pokemon is complete and is divided between a submenu that includes About, Base Stats, Evolution Chain and Moves.

All images except those of the pokemons where designing and created using Adobe Photoshop and Illustrator. The UI/UX was designed using Figma.

### Current features:
* Homescreen with a search bar and all the app sections.
* Complete list of all the pokemons with a search bar and the option to filter by type or generation. The list uses lazyload to load the pokemon cards components currently on screen.
* Individual pokemon page for all pokemons with all information included.
* About component with flavour text, weight and height, breeding information and training and capture information.
* Moves component with all the moves the pokemon can learn. Its divided by level, Machine, egg and tutor.
* Evolution chain with all evolutions, evolution methods and variations. It included link images to access the pokemon directly.
* Base stats component with total stats. Currently missing bar charts.
* Different colours and style classes depending on pokemon type.
* Complete list of all the items in the game, which includes a search bar.

### Planned Features
* Add a global Move List with filters and another search bar.
* Complete the Eevee evolution chain.
* Bar charts for the pokemon base stats.
* Add a Favorite page where you can store any pokemon you like for a quick search.
* Light / Dark mode theme.
* Optional pokemon sounds and footprints.
* Advanced filters for all lists.
* A type chart with the strenghts and weakness of all types.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
