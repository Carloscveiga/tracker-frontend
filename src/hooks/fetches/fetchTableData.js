const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTableData() {
    try {
        const response = await fetch(`${API_URL}/api/stocks`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching Table data:", error);
        return [];
    }
}