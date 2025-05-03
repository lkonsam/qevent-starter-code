import EventCard from "@/components/EventCard";
import { BASE_URL } from "@/api/api";

async function EventPageContent({ searchParams }) {
  const artistName = searchParams?.artist;
  const tag = searchParams?.tag;

  const response = await await fetch(`${BASE_URL}/events`);
  let filteredEvents = await response.json();

  if (artistName) {
    filteredEvents = filteredEvents?.filter(
      (event) => event.artist === artistName
    );
  }
  if (tag) {
    filteredEvents = filteredEvents?.filter((event) =>
      event.tags?.includes(tag)
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center mt-8 mb-32">
      {filteredEvents?.map(
        (eventData, index) =>
          eventData && <EventCard key={index} eventData={eventData} />
      )}
    </div>
  );
}

export default EventPageContent;
