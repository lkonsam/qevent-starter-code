"use client";

import EventCard from "@/components/EventCard";
import React from "react";
// import { dummyEvents } from "@/constants/dummyEvents";
import { fetchEvents } from "@/api/api";
import { useSearchParams } from "next/navigation";

function EventPage() {
  const [showEvents, setShowEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const searchParams = useSearchParams();
  const artistName = searchParams.get("artist");

  React.useEffect(() => {
    const fetchEventsData = async () => {
      setLoading(true);
      try {
        const response = await fetchEvents();
        if (artistName) {
          const filteredEvents = response?.filter(
            (event) => event.artist == artistName
          );
          setShowEvents(filteredEvents);
        } else {
          setShowEvents(response);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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
