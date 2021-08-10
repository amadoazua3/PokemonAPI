

function getPoke() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(url, options)
        .then( response => response.json() ) /* review was created successfully */
        .then(data => console.log(data))
        .catch( error => console.error(error) ); /* handle errors */
}