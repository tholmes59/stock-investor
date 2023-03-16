import axios from "axios";

//Fetch Company profile data
const getCompanyProfile = async (ticker: string | null | unknown) => {
  const response = await axios.get(
    `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${process.env.REACT_APP_FMP_API_KEY}`
  );

  return response.data;
};

//Fetch Company stock price data
const getCompanyPrice = async (ticker: string | null | unknown) => {
  const response = await axios.get(
    `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?serietype=line&apikey=${process.env.REACT_APP_FMP_API_KEY}`
  );

  return response.data;
};

//Fetch Company valuation metrics data
const getCompanyMetrics = async (ticker: string | null | unknown) => {
  const response = await axios.get(
    `https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?limit=1&apikey=${process.env.REACT_APP_FMP_API_KEY}`
  );

  return response.data;
};

//Fetch Company news
const getCompanyNews = async (ticker: string | null | unknown) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${ticker}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );

  return response.data;
};

const stockService = {
  getCompanyProfile,
  getCompanyPrice,
  getCompanyMetrics,
  getCompanyNews,
};

export default stockService;
