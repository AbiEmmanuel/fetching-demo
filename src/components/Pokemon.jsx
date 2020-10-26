import React from 'react';

class Pokemon extends React.Component {

    getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/25")
        .then(res => res.json())
        .then(res => console.log(res))
    }

    render() {

        this.getPokemons()
        return(
            <h1>Attrapez les tous ! o/</h1>
        )
    }
}

export default Pokemon;