import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {


const[articles,setarticles]=useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)

 const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 }

  
  

  const  updatenews = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

  }

  useEffect(() => {
    updatenews();
    document.title = `${capitalizeFirstLetter(props.category)}- NewsMonkey`;

  }, [])
  

  // const handlenext = async () => {
  //   setpage(page+1)
  //   updatenews();
  // };

  // const handleprev = async () => {
  //   setpage(page-1)
  //   updatenews();
  // };

   const fetchMoreData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles( articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    
  } 



  
    return (
      <>
        <h2 style={{ textAlign: "center" , marginTop:"80px" }}>
          This is top{" "}
          {props.category.charAt(0).toUpperCase() +
            props.category.slice(1)}{" "}
          headlines
        </h2>
        { loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
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
          </div>
        </InfiniteScroll>


        {/* <div className="container d-flex  justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handleprev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handlenext}
          >
            Next &rarr;
          </button>
        </div> */}



      </>
    )
    }




News.defaultProps = {
  pageSize: 3,
  country: "in",
  category: "general",
};

News.propsType = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};


export default News
