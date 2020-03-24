import React, { Component } from 'react'
import Container from './Container'

export default class Index extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            display: 'sw'
        }
    }

    toggle = display => this.setState({display})

    render() {
        let {display} = this.state
        return (
            <div>
                <div className='btns'>
                    <h1>Display and Container Components</h1>

                </div>
                
                {display === 'sw' && <Container />}

            </div>
        )
    }
}