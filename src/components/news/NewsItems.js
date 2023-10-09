import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imgURL, newsURL, author, date} = this.props;
        return (
            <div class="flex flex-col items-center justify-center bg-gray-200">
                <div className="card mt-5 border-gray-900" style={{width: "22rem", height: "22rem"}}>
                    <div className = "card-body">
                    <h5 className = "card-title">{title}</h5>
                    <p className = "card-text">{description}</p>
                    <img src={imgURL} alt="card-img" className="card-img" style={{width: "20rem", height: "11rem"}}/>
                    </div>
                    <p className="card-text"><small className="card-muted">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsURL} className = "btn btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItems;