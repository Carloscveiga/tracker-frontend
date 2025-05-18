import { fetchlinpolyData } from "../fetches/fetchlinpolyData";

export async function handleFetchLinpolyData(ticker, setlinpolyData) {
    try {
        const data = await fetchlinpolyData(ticker);

        const formattedData = {
            x: data.map((item) => new Date(item.Date).toISOString().split("T")[0]),
            Close_Price: data.map((item) => item.Close_Price),
            Lin_Trendline: data.map((item) => item.Lin_Trendline),
            Poly_Trendline: data.map((item) => item.Poly_Trendline),
        };

        const linbuySignals = data.filter((item) => item.Lin_Signal === 1);
        const linsellSignals = data.filter((item) => item.Lin_Signal === -1);
        const polybuySignals = data.filter((item) => item.Poly_Signal === 1);
        const polysellSignals = data.filter((item) => item.Poly_Signal === -1);

        formattedData.linbuySignals = linbuySignals.map((item) => ({
            x: item.Date,
            y: item.Close_Price,
        }));
        formattedData.linsellSignals = linsellSignals.map((item) => ({
            x: item.Date,
            y: item.Close_Price,
        }));
        formattedData.polybuySignals = polybuySignals.map((item) => ({
            x: item.Date,
            y: item.Close_Price,
        }));
        formattedData.polysellSignals = polysellSignals.map((item) => ({
            x: item.Date,
            y: item.Close_Price,
        }));

        setlinpolyData(formattedData);
    } catch (error) {
        console.error("Error fetching lin poly data:", error);
    }
}