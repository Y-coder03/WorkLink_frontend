import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category:"general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log('hello I am a constructor from News Component');
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }
    
    async componentDidMount() {
        console.log('cdm');
        this.state.loading = true;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eef4ee5c580a4753b2313177ecc13e65&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.state.loading = false;
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, totalResults: parsedData.totalResults,
        })

    }
    handlePrevClick = async () => {
        console.log('Prev', this.page);
        this.state.loading = true;
        let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eef4ee5c580a4753b2313177ecc13e65&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.state.loading = false;
        console.log(parsedData);
        this.setState({
            page: this.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log('Next', this.page);
        this.state.loading = true;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eef4ee5c580a4753b2313177ecc13e65&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.state.loading = false;
        console.log(parsedData);
        this.setState({
            page: this.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    {this.state.loading ? <div className="d-flex justify-content-center"><iframe title="loading.gif" src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p></div>:
                        <>
                            <h1>News Today </h1>
                            <div className="row">
                                {this.state.articles.map((article) => {
                                    return <div className="col-md-4" key={article.url}>
                                        <NewsItems 
                                        title={article.title?article.title.slice(0, 45)+"...":"..."} 
                                        description={article.description?article.description.slice(0, 80)+"...": "..."} 
                                        imgURL={article.urlToImage?article.urlToImage:"https://cdn.britannica.com/74/167874-050-994361EB/Sheikh-Zayed-Road-Dubai-United-Arab-Emirates.jpg"} newsURL={article.url} 
                                        target="_blank" 
                                        author={article.author} 
                                        date={article.publishedAt}   />
                                    </div>
                                })}

                            </div>
                            <footer className="mt-5 d-flex justify-content-between">
                                <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                            </footer>
                        </>
                }

                    </div>
            </>
                )
    }
}

export default News;