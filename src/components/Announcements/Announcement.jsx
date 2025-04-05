import "./Announcement.scss";
import { formatDistanceToNow } from "date-fns";

export default function Announcement({ announcement }) {
  return (
    <div className="announcement">
      <div className="announcement__header">
        <h3>{announcement.title}</h3>
        <span>
          {formatDistanceToNow(new Date(announcement.createdAt), {
            addSuffix: true,
          })}
        </span>
      </div>
      <p>{announcement.content}</p>
      <div className="announcement__actions">
        <button disabled>❤️ {announcement.likes || 0}</button>
        <button disabled>💬 {announcement.comments?.length || 0}</button>
      </div>
    </div>
  );
}
