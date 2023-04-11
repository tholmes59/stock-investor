import React from "react";
import missing from "../../assets/Image-Not-Available.png";

interface TopNews {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

const TopNewsCard = ({ topNews }: { topNews: TopNews }) => {
  console.log(topNews);

  return (
    <div className="flex flex-row justify-left items-center gap-2 border-t border-lightgray my-2.5 text-sm">
      <div className="w-60">
        {topNews.image === "None" ? (
          <img
            alt=""
            src={missing}
            className="w-60 h-24 mx-2.5 object-cover p-2.5"
          ></img>
        ) : (
          <img
            alt=""
            src={topNews.image}
            className="w-40 h-24 mx-2.5 object-cover p-2.5"
          ></img>
        )}
      </div>
      <div className="flex flex-col my-2.5 px-2.5">
        <p className="text-left">
          <a
            href={topNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold text-lg hover:text-[color: #0f69ff] "
          >
            {topNews.title}
          </a>
        </p>
        <div className="text-left">By {topNews.author}</div>
        <div className="text-left">{topNews.description}</div>
      </div>
    </div>
  );
};

export default TopNewsCard;
