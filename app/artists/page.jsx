"use client";

import React from "react";
import { fetchArtists } from "@/api/api";
import ArtistCard from "@/components/ArtistCard";

function EventPage() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchArtists();
        console.log("Response:", response.slice(0, 3));
        // setData(response.slice(0, 3));
        setData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <div className="flex flex-wrap items-center justify-center mt-8 mb-32">
        {data?.map(
          (artistData, index) =>
            artistData && <ArtistCard key={index} artistData={artistData} />
        )}
      </div>
    </div>
  );
}

export default EventPage;
