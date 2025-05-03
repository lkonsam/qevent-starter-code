import { BASE_URL } from "@/api/api";
import ArtistCard from "@/components/ArtistCard";

async function ArtistsPage() {
  const response = await fetch(`${BASE_URL}/artists`);
  const data = await response.json();

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

export default ArtistsPage;
