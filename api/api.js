const BASE_URL = "https://qevent-backend.labs.crio.do";

export async function fetchEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
