import React from "react";

const NewsCard = ({ news }: any) => {
  return (
    <div className="news-card-container">
      <div className="news-image-container">
        <img alt="CompanyLogo" src={news.urlToImage}></img>
      </div>
      <div className="news-container">
        <p>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-title"
          >
            {news.title}
          </a>
        </p>
        <div className="news-author">By {news.author}</div>
        <div className="news-source">
          {news.source.name} - {news.publishedAt}
        </div>
        <div className="news-description">{news.description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
