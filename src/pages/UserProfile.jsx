import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { updateProfile } from "firebase/auth";
import "../styles/userProfile.css";

// Default image URL for the user profile
const defaultImage =
  "https://png.pngtree.com/png-vector/20190702/ourmid/pngtree-avatar-icon-in-trendy-style-isolated-background-png-image_1535024.jpg";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || "");
      setEmail(auth.currentUser.email || "");
      setPhone(auth.currentUser.phoneNumber || "Not Provided");
      setPhotoURL(auth.currentUser.photoURL || defaultImage);
    }
  }, []);

  const handleUpdateProfile = async () => {
    setLoading(true);
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        setEditing(false);
        setAlert({ message: "Profile updated successfully!", type: "success" });
      } catch (error) {
        console.error("Error updating profile:", error);
        setAlert({ message: "Failed to update profile.", type: "error" });
      }
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (auth.currentUser) {
      try {
        if (password.length < 6) {
          setAlert({ message: "Password must be at least 6 characters", type: "error" });
          return;
        }

        await auth.currentUser.updatePassword(password);
        setAlert({ message: "Password updated successfully!", type: "success" });
        setPassword(""); // Clear the password input
      } catch (error) {
        setAlert({ message: error.message, type: "error" });
      }
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      {alert && (
        <div className={`alert ${alert.type}`}>
          <p>{alert.message}</p>
        </div>
      )}

      <div className="profile-card">
        <img
          src={photoURL || defaultImage}
          alt="User Avatar"
          className="profile-img"
        />

        {editing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input type="email" value={email} disabled placeholder="Email" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Profile Image URL"
            />
            <button
              onClick={handleUpdateProfile}
              className="save-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </>
        ) : (
          <>
            <h3>{name || "No Name"}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => setEditing(true)} className="edit-btn">
              Edit Profile
            </button>
          </>
        )}
      </div>

      <div className="password-section">
        <h3>Change Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <button onClick={handleChangePassword} className="change-password-btn">
          Change Password
        </button>
      </div>

      <div className="stats-section">
        <h3>Account Statistics</h3>
        <p>Number of Orders: 25</p>
        <p>Total Spend: $500</p>
        <p>Favorites: 10</p>
      </div>
    </div>
  );
};

export default UserProfile;
