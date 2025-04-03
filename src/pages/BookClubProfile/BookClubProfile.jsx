import React, { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.jsx";
import "./BookClubProfile.scss";
import profilePhoto from "../../assets/image/bookclub_photo.png";
import Navbar from "../../components/Navbar/Navbar.jsx";

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

  const renderTabContent = () => {
    switch (activeTab) {
      case "chapters":
        return <p>📖 List of chapters goes here...</p>;
      case "announcements":
        return <p>📣 Club announcements go here...</p>;
      case "photos":
        return <p>📷 Photo gallery coming soon...</p>;
      case "events":
        return <p>📅 Upcoming events listed here...</p>;
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
            {["chapters", "announcements", "photos", "events"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
