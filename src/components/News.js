import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

   static defaultProps={
    pageSize:3,
    country: 'in',
    category:'general'
   }

   static propsType={
     pageSize: PropTypes.number,
     country: PropTypes.string,
     category: PropTypes.string
   }


  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page:1
      
    };
  }

  async componentDidMount() {
    
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16c12fe9cf0d4d3db5d7af9d3fd5e1e4&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults,loading:false });
    
  }

  handlenext=async ()=>{
    console.log("next");
    
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16c12fe9cf0d4d3db5d7af9d3fd5e1e4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles,page:this.state.page+1,loading:false });
    
  
}

  handleprev=async ()=>{
    console.log("prev");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16c12fe9cf0d4d3db5d7af9d3fd5e1e4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles,page:this.state.page-1 ,loading:false });
  }

  render() {
    
    return (
      <div className="container my-3">
        <h2 style={{ textAlign: "center" }}>
          This is Top 20 Headlines in India .  
        </h2>
        { this.state.loading && <Spinner/>}

        <div className="row ">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 90)}
                  description={
                    element.description != null &&
                    element.description.slice(0, 88)
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex  justify-content-between" >
          <button disabled={this.state.page<=1 } type="button" className="btn btn-dark" onClick={this.handleprev} >
          &larr; Previous
          </button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
