const API_URL = import.meta.env.VITE_API_URL;

export async function fetchMaData(ticker) {
    try {
        const response = await fetch(`${API_URL}/api/moving-averages-with-signals/${ticker}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching Ma data:", error);
        return [];
    }
}