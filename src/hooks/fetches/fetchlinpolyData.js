const API_URL = import.meta.env.VITE_API_URL;

export async function fetchlinpolyData(ticker) {
    try {
        const response = await fetch(`${API_URL}/api/lin-poly-with-signals/${ticker}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching lin poly data:", error);
        return [];
    }
}