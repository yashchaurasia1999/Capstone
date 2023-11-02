import React, { useState, useEffect } from "react";

export default function () {
  const [newsData, setNewsData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=48f55f058a38423b82aae4e2419c74ad"
        );
        const data = await res.json();
        console.log(data.articles[0].title);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {newsData.articles && newsData.articles.length > 0 && (
        <div className="card">
          <img
            src={newsData.articles[0].urlToImage}
            className="card-img-top"
            alt="..."
          />
          <p className="card-text-title">{newsData.articles[0].title}</p>

          <div className="card-body">
            <p className="card-text">
              
              <p className="card-title-dt">
                {newsData.articles[0].publishedAt.substring(2,10)} &nbsp;&nbsp;&nbsp;&nbsp;
                {newsData.articles[0].publishedAt.substring(11,16)}
                  {newsData.articles[0].publishedAt.substring(11,13)>=12 ? ' PM' : ' AM'}
                
                
              </p>
              {newsData.articles[0].description}
              
            </p>
          </div>
        </div>
      )}
    </>
  );
}
