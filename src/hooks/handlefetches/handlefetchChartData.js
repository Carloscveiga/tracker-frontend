import { fetchChartData } from "../fetches/fetchChartData";

export async function handlefetchChartData(ticker, setChartData, setSelectedTicker) {
  try {
    const data = await fetchChartData(ticker);

    setChartData({
      x: data.map((item) => new Date(item.Date).toISOString().split("T")[0]),
      open: data.map((item) => item.Open),
      high: data.map((item) => item.High),
      low: data.map((item) => item.Low),
      close: data.map((item) => item.Close),
    });

    setSelectedTicker(ticker);
  } catch (error) {
    console.error("Error fetching chart data:", error);
  }
}