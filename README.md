# Pokedex Companion App
> https://pokemon-companion-app-beta2.surge.sh/
## Introduction
*Pokedex Companion App* is a complete Pokedex App wich shows all relevant information about Pokemons for all Generations.

It currently fetch its data through https://pokeapi.co/, https://pokeres.bastionbot.org and through custom jsons.

There is a search bar for filtering pokemons, and buttons to filter through types and Generations.

Information about a Pokemon is complete and is divided between a submenu that includes About, Base Stats, Evolution Chain and Moves.

All images except those of the pokemons where designing and created using Adobe Photoshop and Illustrator. The UI/UX was designed using Figma.

**Current features:**
* Homescreen with a search bar and all the app sections.
* Complete list of all the pokemons with a search bar and the option to filter by type or generation. The list uses lazyload to load the pokemon cards components currently on screen.
* Individual pokemon page for all pokemons with all information included.
* About component with flavour text, weight and height, breeding information and training and capture information.
* Moves component with all the moves the pokemon can learn. Its divided by level, Machine, egg and tutor.
* Evolution chain with all evolutions, evolution methods and variations. It included link images to access the pokemon directly.
* Base stats component with total stats. Currently missing bar charts.
* Different colours and style classes depending on pokemon type.
* Complete list of all the items in the game, which includes a search bar.

**Planned Features**
* Add a global Move List with filters and another search bar.
* Complete the Eevee evolution chain.
* Bar charts for the pokemon base stats.
* Add a Favorite page where you can store any pokemon you like for a quick search.
* Light / Dark mode theme.
* Optional pokemon sounds and footprints.
* Advanced filters for all lists.
* A type chart with the strenghts and weakness of all types.

## Technologies
*Pokemon Companion App* was made using the React JS framework.

It uses multiple containers and componentes to render the entire app. It uses react-router to navigate through all the containers.

The CSS and styles are precompiled using Sass. The animations are implemented with the help of react-reveal and react-transition-group.

All the React states are managed with React Hooks.

**Libraries:**
* "classnames": "^2.3.1",
* "node-sass": "4.14.1",
* "react": "^17.0.2",
* "react-dom": "^17.0.2",
* "react-lazyload": "^3.2.0",
* "react-reveal": "^1.2.2",
* "react-router-dom": "^5.2.0",
* "react-scripts": "4.0.3",
* "react-transition-group": "^4.4.2",
* "recharts": "^2.0.9",
* "web-vitals": "^1.0.1"

## APP Deploymehnt
The app has been publicly deployed on surge.sh.

It can be accessed through the following link:

**https://pokemon-companion-app-beta2.surge.sh/**
