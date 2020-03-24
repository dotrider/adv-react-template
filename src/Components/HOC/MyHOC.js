import React, {Component} from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'

function MyHOC(MyComponent, url) {
    return class extends Component {
        constructor(props){
            super(props)

            this.state = {
                data: null
            }
        }


        getData = () => {
            axios.get(url).then(res => {
                this.setState({
                    data: res.data.results
                })
            })
        }
    

    render(){
    return (
        <div>
            {this.state.data ? (
                <MyComponent data = {this.state.data}/>
            ):(
                this.getData()
            )}
           
        </div>
    )
  }
 }
}

export default MyHOC
