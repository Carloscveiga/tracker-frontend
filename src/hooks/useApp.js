import { useState, useEffect } from "react";
import { fetchTableData } from "./fetches/fetchTableData";
import { handlefetchChartData } from "./handlefetches/handlefetchChartData";
import { handlefetchMaData } from "./handlefetches/handlefetchMaData";
import { handleFetchLinpolyData } from "./handlefetches/handleFetchLinpolyData";

function useHomePage() {
  const [rowData, setRowData] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [maData, setMaData] = useState(null);
  const [linpolyData, setlinpolyData] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTableData();
        setRowData(data);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    })();
  }, []);

  const handleRowClick = (ticker) => {
    handlefetchChartData(ticker, setChartData, setSelectedTicker);
    handlefetchMaData(ticker, setMaData);
    handleFetchLinpolyData(ticker, setlinpolyData);
  };

  return {
    rowData,
    chartData,
    maData,
    linpolyData,
    selectedTicker,
    handleRowClick,
  };
}

export default useHomePage;