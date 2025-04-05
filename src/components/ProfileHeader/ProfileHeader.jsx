import "./ProfileHeader.scss";
import { useParams, useNavigate } from "react-router-dom";
import shareIcon from "../../assets/icons/share.png";
import defaultClubImage from "../../assets/icons/book-stack.png";

export default function ProfileHeader({ profile }) {
  const navigate = useNavigate();
  const { bookClubId } = useParams();

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
      <div className="club-header__title-container">
        <img
          src={profile.profilePhoto || defaultClubImage}
          alt="Book Club"
          className="club-header__photo"
        />
        <h1 className="club-header__title">{profile.name}</h1>
      </div>
      <p className="club-header__subtitles">
        <strong>Created:</strong>{" "}
        {new Date(profile.createdAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        })}
      </p>
      <p className="club-header__subtitles">
        <strong>Location:</strong> {profile.location}
      </p>
      <p className="club-header__subtitles">
        <strong>Meeting Type:</strong> {profile.meetingType}
      </p>
      <p className="club-header__subtitles">
        <strong>Meeting Frequency:</strong> {profile.meetingFrequency}
      </p>
      <p className="club-header__subtitles">
        <strong>Follow Us:</strong> {profile.socialLink}
      </p>
      <p className="club-header__description">{profile.description}</p>

      <div className="club-header__actions">
        <button onClick={() => navigate("#")} className="club-header__button">
          View Members
        </button>
        <button
          onClick={() => navigate(`/editprofile/${bookClubId}`)}
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
