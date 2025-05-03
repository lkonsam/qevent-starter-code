import { BASE_URL } from "@/services/baseurl";
import Tag from "@/components/Tag";

async function EventDetailPage({ params }) {
  const { eventId } = params;
  const response = await fetch(`${BASE_URL}/events/${eventId}`, {
    next: { revalidate: 10 },
  });
  const eventData = await response.json();

  if (!eventData) {
    return <div>Event not found</div>;
  }

  return (
    <div className="m-5">
      <img
        className="w-[30%]  mb-3 group-hover:filter-none shadow-lg m-auto "
        src={eventData.image}
        alt="Bonnie image"
      />
      <div className="mt-5 mb-10 bg-gradient-to-b from-orange-400 to-teal-600 bg-clip-text text-transparent">
        <h1 className="text-2xl font-bold">{eventData.name}</h1>
        <h3>{eventData.location}</h3>
        <h3>{eventData.artist}</h3>
        {/* <p className="mt-5 mb-10">
          {new Date(eventData.date).toDateString()} | {eventData.time}
        </p> */}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {Array.isArray(eventData?.tags) &&
          eventData.tags.map(
            (tag, index) => tag && <Tag text={tag} key={index} />
          )}
      </div>

      <div className="mt-5 mb-10">{eventData.description}</div>

      <div className="flex justify-between items-center mt-10">
        <h3 className="text-2xl font-bold bg-gradient-to-b from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventData.price > 0
            ? `$ ${eventData.price.toLocaleString()}`
            : "FREE"}
        </h3>
        <button className="bg-red-600 rounded-lg py-2 px-3 text-white">
          Buy Tickets
        </button>
      </div>
    </div>
  );
}

export default EventDetailPage;
