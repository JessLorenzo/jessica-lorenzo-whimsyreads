import "./CreateProfile.scss";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

export default function CreateProfile() {
  const [userData, setUserData] = useState(null);
  const { bookClubId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/users/profile/${userId}`);
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to fetch user profile", err);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [bookClubId]);

  const handleSubmit = async (formData) => {
    const userId = localStorage.getItem("userId");
    const dataToSend = {
      ...formData,
      userId,
      bookClubId,
    };

    try {
      await axios.post(`${baseUrl}/api/bookclubs/profile`, dataToSend);
      navigate(`/bookclub-profile/${bookClubId}`);
    } catch (err) {
      console.error("Failed to save book club profile", err);
    }
  };

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className="create-profile">
      <Navbar />
      <EditProfileForm
        userData={userData}
        bookClubId={bookClubId}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
