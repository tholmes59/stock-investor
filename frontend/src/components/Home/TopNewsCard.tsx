import React from "react";
import missing from "../../assets/Image-Not-Available.png";

const TopNewsCard = ({ topNews }: any) => {
  console.log(topNews);

  return (
    <div className="flex flex-row justify-center items-center border-t border-lightgray my-2.5 text-sm">
      <div>
        {topNews.image === "None" ? (
          <img
            alt=""
            src={missing}
            className="w-40 h-24 mx-2.5 object-contain"
          ></img>
        ) : (
          <img
            alt=""
            src={topNews.image}
            className="w-40 h-24 mx-2.5 object-contain"
          ></img>
        )}
      </div>
      <div className="flex flex-col my-2.5">
        <p>
          <a
            href={topNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold text-lg hover:text-[color: #0f69ff]"
          >
            {topNews.title}
          </a>
        </p>
        <div className="top-news-author">By {topNews.author}</div>
        <div className="top-news-description">{topNews.description}</div>
      </div>
    </div>
  );
};

export default TopNewsCard;
