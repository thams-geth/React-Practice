import { useUser } from "./UserContext";
import { useState } from "react";

const Profile = () => {
  const { user, setUser } = useUser();
  const [newName, setNewName] = useState("");

  const handleUpdate = () => {
    if (!newName.trim()) return;

    setUser({ ...user, name: newName, id: user?.id || 0, email: user?.email || "" });
    setNewName("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Profile</h3>

      <p>Current Name: {user?.name}</p>

      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
};

export default Profile;