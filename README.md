#Gotta Catch 'Em All

## Getting Started
visit [this page](https://pokeapi.co/docs/v2#pokemon) and familiarize
yourself a bit with the PokeAPI. We will be using the `https://pokeapi.co/api/v2/pokemon` endpoint.

### Resources
- [jQuery](https://jquery.com/)
- [pokeAPI](https://pokeapi.co/)
- [how to retrieve images from pokeAPI](https://pokeapi-how.appspot.com/page5)
- [how to make a GET fetch request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Start Here:
In IntelliJ
- File > new > project > choose: `web` and click: `finish`
  In GitHub
- `+` > new repository > name your repository "pokemon-project" >
  leave it as public, don't add a README file > click `create
  repository`
- copy everything (or click the clipboard) under `...or create a new
  repository on the command line`

In Intellij:
- Open the terminal and cd into your newly created project
- Copy pasta what you had just copied from your github repo hit return

In your newly created a new IntelliJ project:
- Create the following files:
    - `app.js`: your app lives here, mainly
    - `index.html`
    - don't forget to:
        - link your js file to your html file
        - include jquery in the right spot
        - hydrate
        - have fun

Your HTML file should have only two elements inside the body (not
including the script tags)
- empty div with an id of `poke-container`
- a button with an id of `catch-btn`;

### Challenge
Using jquery or DOM manipulation (your choice), create a
static app that allows users to click on the `I Choose You!` button
that will display a random pokemon's name and image plus 3 more
details (your choice) about that pokemon.

A user should be able to continue "catching" random pokemon and see
them appear on the page.


### BONUS:
- statically remove a pokemon from the page (you will not be
  able to DELETE pokemon from the API)
-  add some styling to your page ([bootstrap](https://getbootstrap.com/) is welcome)
- ask for user's name and display the following sentence on the page:
  "Welcome, `person's name`! You have caught `num of pokemon caught`"
- limit to only 6 pokemon per page, but allow user to click through
  pages of pokemon [see this](https://pokeapi.co/docs/v2#resource-listspagination-section)