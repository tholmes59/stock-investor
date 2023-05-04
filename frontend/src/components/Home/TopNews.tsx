import React, { useState, useEffect } from "react";
import TopNewsCard from "./TopNewsCard";

const TopNews = () => {
  const [topNews, setTopNews] = useState<any>([]);

  useEffect(() => {
    const loadTopNews = async () => {
      const news = await fetch(
        `https://api.currentsapi.services/v1/latest-news?language=en&country=us&keywords=latest&apiKey=${process.env.REACT_APP_TOP_NEWS_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setTopNews(news);
    };
    loadTopNews();
  }, []);

  let articleArry = topNews.news;

  let articles =
    articleArry &&
    articleArry.map((news: any, id: number) => (
      <TopNewsCard key={id} topNews={news as any} />
    ));

  return (
    <div className="grid col-start-1 col-end-3">
      <h2>Today's Top News</h2>
      <div className="grid grid-cols-[repeat(2,49%)] gap-x-[1%] gap-y-[0.5%]">
        {articles}
      </div>
    </div>
  );
};

export default TopNews;
