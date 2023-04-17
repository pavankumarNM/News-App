import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl, author,publishedAt,source,category} = this.props;
    return (
      <div className="my-3" >
        <div className="card" >        
          <span  className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'90%' ,zIndex:"1"}}>{source}</span>
           <img className="card-img-top" src={!imageUrl?"https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__340.png":imageUrl} alt="..." />
           <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By <b>{author?author:"Unknown"}</b> At {new Date(publishedAt).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    ) 
  }
}

export default NewsItem