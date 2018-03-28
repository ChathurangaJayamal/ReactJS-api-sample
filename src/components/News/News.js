import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {

    constructor (props) {
        super(props)
        this.state = {
            news : []
        }
        this.endpoint = props.endpoint
        this.renderItems = this.renderItems.bind(this)
    }

    componentWillMount () {
        const url = `https://newsapi.org/${this.props.endpoint}?country=us&category=business&apiKey=6b3232fb7b134ec4932ad8ea0d0c9493`
        fetch (url)
            .then (response => response.json())
            .then (json => {
                this.setState(({
                    news : json.articles.filter(
                        article => (article.urlToImage)
                    )
                }))
            })
            .catch (error => console.log (error))
    }

    renderItems () {
        return this.state.news.map(item => (
            <NewSingle key={item.url} item={item} class="single"/>
        ))
    }

    render () {
        return (
            <div className="main">
                {this.renderItems()}
                <div className="footer">
                    <p>Footer Area</p>
                </div>
            </div>
        )
    }
}

export default News