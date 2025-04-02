import "./EditProfileForm.scss";
import { useState } from "react";

export default function EditProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    clubName: "",
    location: "",
    meetingType: "In-Person",
    chapters: "",
    frequency: "Monthly",
    description: "",
    visibility: "Public",
    genres: [],
    website: "",
    profilePhoto: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (opt) => opt.value
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.clubName.trim())
      newErrors.clubName = "Book club name is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = document.querySelector(
        `[name="${Object.keys(validationErrors)[0]}"]`
      );
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        firstErrorField.focus();
      }

      return;
    }

    setErrors({});
    console.log("Profile Submitted:", formData);
    // Submit the form data to your backend here
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <h2 className="edit-profile-form__title">
        Create Your Book Club Profile
      </h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
        required
      />
      {errors.firstName && (
        <span className="edit-profile-form__error">{errors.firstName}</span>
      )}

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName}
        required
      />
      {errors.lastName && (
        <span className="edit-profile-form__error">{errors.lastName}</span>
      )}

      <input
        type="text"
        name="clubName"
        placeholder="Book Club Display Name"
        onChange={handleChange}
        value={formData.clubName}
        required
      />
      {errors.clubName && (
        <span className="edit-profile-form__error">{errors.clubName}</span>
      )}

      <input
        type="text"
        name="location"
        placeholder="Book Club Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label className="edit-profile-form__label" htmlFor="meetingType">
        Meeting Type:
      </label>
      <select
        name="meetingType"
        onChange={handleChange}
        value={formData.meetingType}
      >
        <option>In-Person</option>
        <option>Hybrid</option>
        <option>Virtual</option>
      </select>

      <input
        type="number"
        name="chapters"
        placeholder="Number of Chapters"
        value={formData.chapters}
        onChange={handleChange}
        required
      />

      <label className="edit-profile-form__label" htmlFor="meetingFrequency">
        Meeting Frequency:
      </label>
      <select
        name="frequency"
        onChange={handleChange}
        value={formData.frequency}
      >
        <option>Weekly</option>
        <option>Bi-weekly</option>
        <option>Monthly</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        name="website"
        placeholder="Social Media or Website (optional)"
        onChange={handleChange}
      />

      <label className="edit-profile-form__label" htmlFor="uploadPhoto">
        Upload Profile Photo:
      </label>
      <input
        type="file"
        name="profilePhoto"
        accept="image/*"
        onChange={handleChange}
      />

      <label className="edit-profile-form__label" htmlFor="visibility">
        Visibility:
      </label>
      <select
        name="visibility"
        onChange={handleChange}
        value={formData.visibility}
      >
        <option>Public</option>
        <option>Private</option>
      </select>

      <button type="submit">Save Profile</button>
    </form>
  );
}
