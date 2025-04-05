import EventCard from "./EventCard";
import "./Events.scss";

const mockEvents = [
  {
    id: 1,
    title: "April Book Club Meetup",
    date: "2025-04-12T19:00:00",
    location: "Jess's Apartment, Miami FL",
  },
  {
    id: 2,
    title: "Author Talk: V.E. Schwab",
    date: "2025-04-20T18:30:00",
    location: "Virtual (Zoom link to come)",
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
