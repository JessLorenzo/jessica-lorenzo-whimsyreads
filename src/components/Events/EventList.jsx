import EventCard from "./EventCard";
import "./Events.scss";

const mockEvents = [
  {
    id: 1,
    title: "April Book Club Meetup",
    date: "2025-04-12T10:00:00",
    location: "Neverland Coffee Bar, North Miami FL",
  },
  {
    id: 2,
    title: "Author Talk: Jasmine Maas",
    date: "2025-04-26T18:30:00",
    location: "Books & Books - Coconut Grove",
  },
];

export default function EventList() {
  return (
    <div className="event-list">
      <h2 className="event-list__heading">Upcoming Events</h2>
      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
