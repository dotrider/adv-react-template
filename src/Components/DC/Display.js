import React, { Component } from 'react'

export class Display extends Component {
    render() {
        const characterList = this.props.characters.map((character, i) => {
            console.log('resData',character)
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

export default Display

