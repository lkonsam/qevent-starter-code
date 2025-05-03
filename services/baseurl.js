export const BASE_URL = "https://qevent-backend.labs.crio.do";

export async function handleEventCreate(payload) {
  try {
    const response = await fetch(`${BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Unable to create event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    // console.error("Error:", error);
    throw error;
  }
}
