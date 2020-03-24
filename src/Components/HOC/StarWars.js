import React, { Component } from 'react'
import MyHOC from './MyHOC'

export class StarWars extends Component {
    render() {
        const characterList = this.props.data.map((character, i) => {
            console.log('StarWars Comp',character)
            return (
                <div className='star-wars-char' key={i}>
                    <h2>name: {character.name}</h2>
                    <h2>heigh: {character.height}</h2>
                    <h2>mass: {character.mass}</h2>

                </div>
            )
        })
        return (
            <div>
                {characterList}
            </div>
        )
    }
}

export default MyHOC(StarWars , `https://swapi.co/api/people/`)
