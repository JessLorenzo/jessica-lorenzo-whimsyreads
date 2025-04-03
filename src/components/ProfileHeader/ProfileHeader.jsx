import "./ProfileHeader.scss";
import { useNavigate } from "react-router-dom";
import shareIcon from "../../assets/icons/share.png";

export default function ProfileHeader({ profile }) {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: profile.name,
        text: `Check out our book club: ${profile.name}`,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <div className="club-header">
      <img
        src={profile.profilePhoto}
        alt="Book Club"
        className="club-header__photo"
      />
      <h1 className="club-header__title">{profile.name}</h1>
      <p className="club-header__subtitles">Created: {profile.createdAt}</p>
      <p className="club-header__subtitles">Location: {profile.location}</p>
      <p className="club-header__subtitles">Creator: {profile.creator}</p>
      <p className="club-header__description">{profile.description}</p>

      <div className="club-header__actions">
        <button
          onClick={() => navigate("/members")}
          className="club-header__button"
        >
          View Members
        </button>
        <button
          onClick={() => navigate("/editprofile")}
          className="club-header__button"
        >
          Edit Profile
        </button>
        <button
          onClick={handleShare}
          className="club-header__icon-button"
          aria-label="Share"
        >
          <img src={shareIcon} alt="Share" />
        </button>
      </div>
    </div>
  );
}
