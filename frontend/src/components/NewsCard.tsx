import React from "react";

const NewsCard = ({ news }: any) => {
  return (
    <div className="flex flex-row justify-center items-center text-[0.8rem] mx-0 my-2.5 border-t-[lightgray] border-t-[1px] border-solid">
      <div className="w-[155px] h-[100px] mr-5">
        <img
          alt="CompanyLogo"
          src={news.urlToImage}
          className="w-[155px] h-[100px] object-cover mx-2.5 my-0"
        ></img>
      </div>
      <div className="flex flex-col mx-0 my-2.5 text-left">
        <p>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[black] text-[1.1rem] font-[bold] hover:text-[#0f69ff]"
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
