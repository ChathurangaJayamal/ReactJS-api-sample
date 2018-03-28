import React from 'react'

//stateless way
const NewSingle = ({item}) => (
    
    <div className="card">
        <div className="card-image">
            <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="card-title-item">{item.source.name}</div>
        <div className="card-content">
            <p>{item.title}</p>
        </div>
        <div className="card-action">
            <a href={item.url} target="_blank" title={item.source.name}>Full article</a>
        </div>
    </div>
    
)

export default NewSingle
