"use client";

import EventCard from "@/components/EventCard";
import React from "react";
// import { dummyEvents } from "@/constants/dummyEvents";
import { fetchEvents } from "@/api/api";
import { useSearchParams } from "next/navigation";

function EventPage() {
  const [showEvents, setShowEvents] = React.useState([]);
  const searchParams = useSearchParams();

  const artistName = searchParams.get("artist");
  const tag = searchParams.get("tag");

  React.useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetchEvents();
        let filteredEvents = response;

        if (artistName) {
          filteredEvents = response?.filter(
            (event) => event.artist == artistName
          );
        }
        if (tag) {
          filteredEvents = filteredEvents?.filter((event) =>
            event.tags?.includes(tag)
          );
        }
        setShowEvents(filteredEvents);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchEventsData();
  }, []);

  return (
    <div className="h-full">
      <div className="flex flex-wrap items-center justify-center mt-8 mb-32">
        {showEvents?.map(
          (eventData, index) =>
            eventData && <EventCard key={index} eventData={eventData} />
        )}
      </div>
    </div>
  );
}

export default EventPage;
