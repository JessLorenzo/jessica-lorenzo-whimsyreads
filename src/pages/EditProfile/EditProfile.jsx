import "./EditProfile.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

export default function EditProfile() {
  const [userData, setUserData] = useState(null);

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
  }, []);

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className="edit-profile">
      <Navbar />
      <EditProfileForm userData={userData} />
    </div>
  );
}
