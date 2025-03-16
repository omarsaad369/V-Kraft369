import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { updateProfile } from "firebase/auth";
import "../styles/userProfile.css";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [editing, setEditing] = useState(false);

  const defaultImage = "https://png.pngtree.com/png-vector/20190702/ourmid/pngtree-avatar-icon-in-trendy-style-isolated-background-png-image_1535024.jpg";

  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || "");
      setEmail(auth.currentUser.email || "");
      setPhone(auth.currentUser.phoneNumber || "Not Provided");
      setPhotoURL(auth.currentUser.photoURL || defaultImage);
    }
  }, []);

  const handleUpdateProfile = async () => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        setEditing(false);
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      }
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <img 
          src={photoURL || defaultImage} 
          alt="User Avatar" 
          className="profile-img"
        />

        {editing ? (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" disabled />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
            <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder="Profile Image URL" />
            <button onClick={handleUpdateProfile} className="save-btn">Save</button>
          </>
        ) : (
          <>
            <h3>{name || "No Name"}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => setEditing(true)} className="edit-btn">Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
