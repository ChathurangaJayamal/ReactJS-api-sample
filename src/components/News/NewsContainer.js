import React, { Component } from 'react'
import '../App.css'
import News from './News'

class NewsContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            headlines : {
                endpoint : "/v2/top-headlines"
            }
        }
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">News Feed</h1>
            </header>
            <News endpoint={this.state.headlines.endpoint}/>
        </div>
        )
    }
}

export default NewsContainer

