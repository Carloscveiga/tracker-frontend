import { fetchMaData } from "../fetches/fetchMaData";

export async function handlefetchMaData(ticker, setMaData) {
    try {
        const data = await fetchMaData(ticker);

        const formattedData = data.map((item) => ({
            ...item,
            Date: new Date(item.Date).toISOString().split('T')[0],
        }));

        const buySignals = formattedData.filter((item) => item.Signal === 1);
        const sellSignals = formattedData.filter((item) => item.Signal === -1);

        setMaData({
            x: formattedData.map((item) => item.Date),
            ma5: data.map((item) => item.SMA_5),
            ma15: data.map((item) => item.SMA_15),
            ma20: data.map((item) => item.SMA_20),
            ma200: data.map((item) => item.SMA_200),
            buySignals: buySignals.map((item) => ({
                x: item.Date,
                y: item.SMA_5,
            })),
            sellSignals: sellSignals.map((item) => ({
                x: item.Date,
                y: item.SMA_5,
            })),
        });
    } catch (error) {
        console.error("Error fetching moving average data:", error);
    }
}