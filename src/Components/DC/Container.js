import React, {Component} from 'react';
import axios from 'axios';
import Display from './Display'



export default class CharContainer extends Component {
    constructor(){
        super();

        this.state = {
            characters: []
        }

    }


    componentDidMount(){
        axios.get(`https://swapi.co/api/people/`).then(res => {
            console.log('display', res.data.results)
            this.setState({
                characters: res.data.results
            })
        })
    }


    render(){
        console.log(this.state.characters)
        return(
            <div><Display characters={this.state.characters}/></div>
        )
    }
}
