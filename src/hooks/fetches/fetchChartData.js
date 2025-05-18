// const API_URL = import.meta.env.VITE_API_URL;

export async function fetchChartData(ticker) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/stock-history/${ticker}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching OHLC data:", error);
        return [];
    }
}