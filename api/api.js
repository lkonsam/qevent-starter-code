export const BASE_URL = "https://qevent-backend.labs.crio.do";

export async function fetchEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error(`Unable to fetch events: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function fetchArtists() {
  try {
    const response = await fetch(`${BASE_URL}/artists`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error(`Unable to fetch artists: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function fetchTags() {
  try {
    const response = await fetch(`${BASE_URL}/tags`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error(`Unable to fetch tags: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function fetchEventDetails(eventId) {
  try {
    const response = await fetch(`${BASE_URL}/events/${eventId}`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error(`Unable to fetch event details: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
