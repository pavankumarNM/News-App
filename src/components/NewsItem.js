import React from "react";

const NewsItem =(props)=>{
  
    let {title, description,imageUrl,newsUrl, author,publishedAt,source} = props;
    return (
      <div className="my-3 mx-3" >
        <div className="card" >        
          <span  className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'90%' ,zIndex:"1"}}>{source}</span>
           <img className="card-img-top" src={!imageUrl?"https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__340.png":imageUrl} alt="..." />
           <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By <b>{author?author:"Unknown"}</b> At {new Date(publishedAt).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    ) 
  }


export default NewsItem