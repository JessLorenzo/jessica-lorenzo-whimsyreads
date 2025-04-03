import { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.jsx";
import "./BookClubProfile.scss";
import profilePhoto from "../../assets/image/bookclub_photo.png";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Chapters from "../../components/Chapters/Chapters.jsx";

export default function BookClubProfile() {
  const [activeTab, setActiveTab] = useState("chapters");
  const profile = {
    profilePhoto: profilePhoto,
    name: "The Literary Book Coven",
    createdAt: "March 2024",
    location: "Miami, FL",
    creator: "Jessica Lorenzo",
    description:
      "Welcome to The Literary Book Coven! We are a cozy, creative book club for lovers of fantasy, fiction, and deep conversations over wine!",
  };

  const chapterData = [
    {
      id: 1,
      book: "The Night Circus",
      meetingDate: "April 25, 2025",
      location: "Zoom",
    },
    {
      id: 2,
      book: "The Midnight Library",
      meetingDate: "May 30, 2025",
      location: "In-person - Miami",
    },
    {
      id: 3,
      book: "The Midnight Library",
      meetingDate: "May 30, 2025",
      location: "In-person - Miami",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "chapters":
        return (
          <Chapters
            chapters={chapterData}
            onEdit={(id) => console.log("Edit", id)}
          />
        );
      case "polls":
        return <p>BOTM voting goes here...</p>;
      case "announcements":
        return <p>Club announcements go here...</p>;
      case "photos":
        return <p>Photo gallery coming soon...</p>;
      case "events":
        return <p>Upcoming events listed here...</p>;

      default:
        return null;
    }
  };

  return (
    <div className="body">
      <Navbar />
      <div className="club-profile">
        <ProfileHeader profile={profile} />

        <div className="club-tabs">
          <nav className="tabs">
            {["chapters", "polls", "announcements", "photos", "events"].map(
              (tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </nav>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
