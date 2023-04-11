import React, { useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockChart = ({ price }: HighchartsReact.Props) => {
  interface PriceData {
    close: number;
    date: string;
  }

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  let chartName = price && price.symbol;
  let dataArray = [];

  let priceArray =
    price && Array.isArray(price.historical) ? price.historical : [];

  let priceData = price && [...priceArray];

  let stockData = priceData.sort(function compare(a: PriceData, b: PriceData) {
    let dateA: Date = new Date(a.date);
    let dateB: Date = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  if (stockData) {
    for (let i = 0; i < stockData.length; i++) {
      let tempArray = [];
      tempArray.push(new Date(stockData[i].date).getTime(), stockData[i].close);
      dataArray.push(tempArray);
      tempArray = [];
    }
  }

  const options: Highcharts.Options = {
    title: {
      text: chartName + " Chart",
    },
    series: [
      {
        type: "line",
        data: dataArray,
      },
    ],
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 7,
          text: "7d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "ytd",
          text: "YTD",
        },
        {
          type: "year",
          count: 1,
          text: "1yr",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 5,
    },
  };

  return (
    <div>
      {price && (
        <HighchartsReact
          options={options}
          ref={chartComponentRef}
          highcharts={Highcharts}
          constructorType={"stockChart"}
        />
      )}
    </div>
  );
};

export default StockChart;
