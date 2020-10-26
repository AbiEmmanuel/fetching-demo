import React from 'react';

class Pokemon extends React.Component {
    state = {
        Pokemons: ''
    }

    getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/5")
        .then(res => res.json())
        .then(res => this.setState({ Pokemons: res}))
    }

    componentDidMount() {
        this.getPokemons()
    }

    render() {
        return(
            <div>
                <h1>Attrapez les tous ! o/</h1>
                <div>
                    {this.state.Pokemons.name}
                </div>
            </div>
        )
    }
}

export default Pokemon;