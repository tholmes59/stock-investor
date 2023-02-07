import axios from "axios";

//Fetch Company profile data
const getCompanyProfile = async (ticker: string | null | unknown) => {
  const response = await axios.get(
    `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${process.env.REACT_APP_FMP_API_KEY}`
  );

  return response.data;
};

const stockService = {
  getCompanyProfile,
};

export default stockService;
