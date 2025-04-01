import "./EditProfile.scss";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function EditProfile() {
  return (
    <div className="edit-profile">
      <Navbar />
      <EditProfileForm />
    </div>
  );
}
