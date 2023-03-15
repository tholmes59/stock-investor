import React from "react";

const CompanyMetrics = ({ metrics }: any) => {
  console.log(metrics);

  function companyMetrics(val: string) {
    let num = metrics && metrics.map((x: any) => x[val]);
    let value = num.shift();
    if (!value) {
      return "N/A";
    } else {
      return value.toFixed(2);
    }
  }

  return (
    <>
      {metrics && (
        <div className="valuation-metrics-container">
          <h1 className="text-2xl font-bold">Valuation Metrics</h1>
          <h3>Profitability Ratios</h3>
          <table>
            {metrics && (
              <tr>
                <td>Gross Profit Margin:</td>{" "}
                <td>{companyMetrics("grossProfitMarginTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Operating Profit Margin:</td>{" "}
                <td>{companyMetrics("operatingProfitMarginTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Pretax Profit Margin:</td>{" "}
                <td>{companyMetrics("pretaxProfitMarginTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Net Profit Margin:</td>{" "}
                <td>{companyMetrics("netProfitMarginTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Return on Assets:</td>{" "}
                <td>{companyMetrics("returnOnAssetsTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Return on Equity:</td>{" "}
                <td>{companyMetrics("returnOnEquityTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Return on Capital Employed:</td>{" "}
                <td>{companyMetrics("returnOnCapitalEmployedTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>EBIT per Revenue:</td>{" "}
                <td>{companyMetrics("ebitPerRevenueTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>EBT per EBIT:</td>{" "}
                <td>{companyMetrics("ebtPerEbitTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Net Income per EBT:</td>{" "}
                <td>{companyMetrics("netIncomePerEBTTTM")}</td>
              </tr>
            )}
          </table>
          <h3>Liquidity Ratios</h3>
          <table>
            {metrics && (
              <tr>
                <td>Cash Ratio:</td> <td>{companyMetrics("cashRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Quick Ratio:</td> <td>{companyMetrics("quickRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Current Ratio:</td>{" "}
                <td>{companyMetrics("currentRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Short Term Coverage Ratio:</td>{" "}
                <td>{companyMetrics("shortTermCoverageRatiosTTM")}</td>
              </tr>
            )}
          </table>
          <h3>Activity Ratios</h3>
          <table>
            {metrics && (
              <tr>
                <td>Receivables Turnover:</td>{" "}
                <td>{companyMetrics("receivablesTurnoverTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Days Sales Outstanding:</td>{" "}
                <td>{companyMetrics("daysOfSalesOutstandingTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Inventory Turnover:</td>{" "}
                <td>{companyMetrics("inventoryTurnoverTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Fixed Asset Turnover:</td>{" "}
                <td>{companyMetrics("fixedAssetTurnoverTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Asset Turnover:</td>{" "}
                <td>{companyMetrics("assetTurnoverTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Operating Cycle:</td>{" "}
                <td>{companyMetrics("operatingCycleTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Days Inventory Outstanding:</td>{" "}
                <td>{companyMetrics("daysOfInventoryOutstandingTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Payables Turnover:</td>{" "}
                <td>{companyMetrics("payablesTurnoverTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Days Payables Outstanding:</td>{" "}
                <td>{companyMetrics("daysOfPayablesOutstandingTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Cash Conversion Cycle:</td>{" "}
                <td>{companyMetrics("cashConversionCycleTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Effective Tax Rate:</td>{" "}
                <td>{companyMetrics("effectiveTaxRateTTM")}</td>
              </tr>
            )}
          </table>
          <h3>Leverage Ratios</h3>
          <table>
            {metrics && (
              <tr>
                <td>Debt Ratio:</td> <td>{companyMetrics("debtRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Debt to Equity Ratio:</td>{" "}
                <td>{companyMetrics("debtEquityRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Interest Coverage Ratio:</td>{" "}
                <td>{companyMetrics("interestCoverageTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Cap Ex Coverage Ratio:</td>{" "}
                <td>{companyMetrics("capitalExpenditureCoverageRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Dividend Paid and Capex Coverage Ratio:</td>{" "}
                <td>
                  {companyMetrics("dividendPaidAndCapexCoverageRatioTTM")}
                </td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Cash Flow Coverage Ratio:</td>{" "}
                <td>{companyMetrics("cashFlowCoverageRatiosTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Long Term Debt to Capitalization:</td>{" "}
                <td>{companyMetrics("longTermDebtToCapitalizationTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Total Debt to Capitalization Ratio:</td>{" "}
                <td>{companyMetrics("totalDebtToCapitalizationTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Cash Flow to Debt Ratio:</td>{" "}
                <td>{companyMetrics("cashFlowToDebtRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Company Equity Multiplier:</td>{" "}
                <td>{companyMetrics("companyEquityMultiplierTTM")}</td>
              </tr>
            )}
          </table>
          <h3>Market Ratios</h3>
          <table>
            {metrics && (
              <tr>
                <td>P/E Ratio:</td> <td>{companyMetrics("peRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>PEG Ratio:</td> <td>{companyMetrics("pegRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>P/B:</td> <td>{companyMetrics("priceToBookRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>P/S:</td> <td>{companyMetrics("priceToSalesRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Dividend Yield:</td>{" "}
                <td>{companyMetrics("dividendYieldTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Dividend Yield %:</td>{" "}
                <td>{companyMetrics("dividendYielPercentageTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Payout Ratio:</td>{" "}
                <td>{companyMetrics("payoutRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Cash per Share:</td>{" "}
                <td>{companyMetrics("cashPerShareTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Free Cash Flow per Share:</td>{" "}
                <td>{companyMetrics("freeCashFlowPerShareTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Operating Cash Flow per Share:</td>{" "}
                <td>{companyMetrics("operatingCashFlowPerShareTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Price to Cash Flow Ratio:</td>{" "}
                <td>{companyMetrics("priceCashFlowRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Price Fair Value:</td>{" "}
                <td>{companyMetrics("priceFairValueTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Price to Free Cash Flow Ratio:</td>{" "}
                <td>{companyMetrics("priceToFreeCashFlowsRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Price to Operating Cash Flow Ratio:</td>{" "}
                <td>{companyMetrics("priceToOperatingCashFlowsRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Free Cash Flow to Operating Cash Flow Ratio:</td>{" "}
                <td>
                  {companyMetrics("freeCashFlowOperatingCashFlowRatioTTM")}
                </td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Operating Cash Flow to Sales Ratio:</td>{" "}
                <td>{companyMetrics("operatingCashFlowSalesRatioTTM")}</td>
              </tr>
            )}
            {metrics && (
              <tr>
                <td>Enterprise Value Multiple:</td>{" "}
                <td>{companyMetrics("enterpriseValueMultipleTTM")}</td>
              </tr>
            )}
          </table>
        </div>
      )}
    </>
  );
};

export default CompanyMetrics;
