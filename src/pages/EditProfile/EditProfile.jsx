import "./EditProfile.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

export default function EditProfile() {
  const [userData, setUserData] = useState(null);
  const { bookClubId } = useParams();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("Loaded userId in edit profile:", userId);

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/users/profile/${userId}`);
        console.log("Fetched user profile:", res.data);
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to fetch user profile", err);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [bookClubId]);

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className="edit-profile">
      <Navbar />
      <EditProfileForm userData={userData} bookClubId={bookClubId} />
      <Footer />
    </div>
  );
}
