import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import ReactPaginate from "react-paginate";

const News = ({ news, stock }: any) => {
  console.log(news);
  console.log(stock);
  let ticker = stock && stock.map((x: any) => x.symbol);

  const [itemsPerPage] = useState(5);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  let currentStoriesArray = news && news.articles;
  let currentStories: any;
  let currentStoriesLength: any;
  if (currentStoriesArray) {
    currentStories = currentStoriesArray.slice(itemOffset, endOffset);
    currentStoriesLength = currentStoriesArray.length;
  }
  console.log(currentStories);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(currentStories);
    setPageCount(Math.ceil(currentStoriesLength / itemsPerPage));
  }, [itemOffset, itemsPerPage, news]);

  const newsCards =
    currentStories &&
    currentStories.map((news: any, id: any) => (
      <NewsCard key={id} news={news} />
    ));

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % news.articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div>
        {news && <h1>{ticker} in the news</h1>}
        {newsCards}
        <div className="flex justify-center mt-[30px]">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            // renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
