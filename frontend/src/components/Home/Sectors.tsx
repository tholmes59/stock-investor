import React, { useState, useEffect } from "react";

function Sectors() {
  const [sectors, setSectors] = useState<any>([]);

  useEffect(() => {
    const loadSectors = async () => {
      console.log(process.env.REACT_APP_ALPHA_ADVTG_API_KEY);
      const sector = await fetch(
        `https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.REACT_APP_ALPHA_ADVTG_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setSectors(sector);
    };
    loadSectors();
  }, []);

  let keyData = Object.keys(sectors);

  let sectorsArray = Object.entries(sectors).map((e) => ({ [e[0]]: e[1] }));
  sectorsArray.splice(0, 1);

  let tempArray = [];

  for (let i = 1; i < keyData.length; i++) {
    tempArray.push(sectors[keyData[i]]);
  }

  let tableStyle: any = { "text-align": "left" };

  let table = (
    <table className="border-collapse">
      <thead className="bg-[#f0eff4]">
        <tr className="text-[13px]">
          <th>Sector</th>
          <th>Today</th>
          <th>1D</th>
          <th>5D</th>
          <th>1M</th>
          <th>3M</th>
          <th>YTD</th>
          <th>1yr</th>
          <th>3yr</th>
          <th>5yr</th>
          <th>10yr</th>
        </tr>
      </thead>
      <tbody className="text-[13px]">
        <tr>
          <th style={tableStyle}>Communication Services</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Communication Services"] ? (
                <td
                  style={
                    parseFloat(sec["Communication Services"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Communication Services"].split("%")).toFixed(
                    1
                  ) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Consumer Discretionary</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Consumer Discretionary"] ? (
                <td
                  style={
                    parseFloat(sec["Consumer Discretionary"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Consumer Discretionary"].split("%")).toFixed(
                    1
                  ) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Consumer Staples</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Consumer Staples"] ? (
                <td
                  style={
                    parseFloat(sec["Consumer Staples"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Consumer Staples"].split("%")).toFixed(1) +
                    "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Energy</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Energy"] ? (
                <td
                  style={
                    parseFloat(sec["Energy"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Energy"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Financials</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Financials"] ? (
                <td
                  style={
                    parseFloat(sec["Financials"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Financials"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Health Care</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Health Care"] ? (
                <td
                  style={
                    parseFloat(sec["Health Care"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Health Care"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Industrials</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Industrials"] ? (
                <td
                  style={
                    parseFloat(sec["Industrials"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Industrials"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Information Technology</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Information Technology"] ? (
                <td
                  style={
                    parseFloat(sec["Information Technology"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Information Technology"].split("%")).toFixed(
                    1
                  ) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Materials</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Materials"] ? (
                <td
                  style={
                    parseFloat(sec["Materials"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Materials"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Real Estate</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Real Estate"] ? (
                <td
                  style={
                    parseFloat(sec["Real Estate"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Real Estate"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
        <tr>
          <th style={tableStyle}>Utilities</th>
          {tempArray &&
            tempArray.map((sec) =>
              sec["Utilities"] ? (
                <td
                  style={
                    parseFloat(sec["Utilities"].split("%")) > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {parseFloat(sec["Utilities"].split("%")).toFixed(1) + "%"}
                </td>
              ) : null
            )}
        </tr>
      </tbody>
    </table>
  );

  return <div className="text-sm text-center">{table}</div>;
}

export default Sectors;
