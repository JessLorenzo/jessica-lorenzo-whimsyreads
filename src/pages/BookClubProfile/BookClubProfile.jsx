import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.jsx";
import "./BookClubProfile.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import BookPoll from "../../components/BookPoll/BookPoll.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

export default function BookClubProfile() {
  const { bookClubId } = useParams();
  const [activeTab, setActiveTab] = useState("polls");
  const [bookClub, setBookClub] = useState(null);

  useEffect(() => {
    const fetchBookClub = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/bookclubs/${bookClubId}`);
        const { profilePhoto, ...rest } = res.data;
        setBookClub(rest);
      } catch (err) {
        console.error("Failed to fetch book club", err);
      }
    };

    fetchBookClub();
  }, [bookClubId]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "polls":
        return <BookPoll />;
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
  if (!bookClub) return <p>Loading club profile...</p>;

  return (
    <div className="body">
      <Navbar />
      <div className="club-profile">
        <ProfileHeader profile={bookClub} />
        <div className="club-profile__tabs-container">
          <nav className="club-profile__tabs">
            {["polls", "announcements", "photos", "events"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
          <div className="club-profile__tab-content">{renderTabContent()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
