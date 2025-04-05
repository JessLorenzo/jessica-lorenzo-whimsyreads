import { format } from "date-fns";
import "./Events.scss";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__info">
        <strong>Date:</strong>{" "}
        {format(new Date(event.date), "MMMM d, yyyy • h:mm a")}
      </p>
      <p className="event-card__info">
        <strong>Location:</strong> {event.location}
      </p>
    </div>
  );
}
