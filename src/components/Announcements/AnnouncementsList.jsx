import Announcement from "./Announcement";
import "./Announcement.scss";

const mockAnnouncements = [
  {
    id: 1,
    title: "April Meetup",
    content:
      "Reminder: Our next meetup is April 12th at 7pm. Bring snacks and your thoughts on chapters 1–5!",
    createdAt: "2025-04-03T09:00:00Z",
    likes: 8,
    comments: [],
  },
  {
    id: 2,
    title: "New Monthly Read!",
    content: "*The Night Circus* has been selected as April's read! 🎪📖",
    createdAt: "2025-04-01T12:45:00Z",
    likes: 15,
    comments: [],
  },
];

export default function AnnouncementsList() {
  return (
    <div className="announcements-list">
      <h2>Announcements</h2>
      {mockAnnouncements.map((announcement) => (
        <Announcement key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
}
