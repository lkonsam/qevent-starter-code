"use client";

import EventCard from "@/components/EventCard";
import React, { Suspense } from "react";
import { fetchEvents } from "@/api/api";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function EventPageContent() {
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
            (event) => event.artist === artistName
          );
        }
        if (tag) {
          filteredEvents = filteredEvents?.filter((event) =>
            event.tags?.includes(tag)
          );
        }
        setShowEvents(filteredEvents);
      } catch (error) {
        // console.error(error.message);
        toast.error("Error fetching events");
      }
    };
    fetchEventsData();
  }, [artistName, tag]);

  return (
    <div className="flex flex-wrap items-center justify-center mt-8 mb-32">
      <div>
        <Toaster />
      </div>
      {showEvents?.map(
        (eventData, index) =>
          eventData && <EventCard key={index} eventData={eventData} />
      )}
    </div>
  );
}

function EventPage() {
  return (
    <div className="h-full">
      <Suspense
        fallback={<div className="text-center mt-8">Loading events...</div>}
      >
        <EventPageContent />
      </Suspense>
    </div>
  );
}

export default EventPage;
