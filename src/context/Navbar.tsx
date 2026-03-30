import { useUser } from "./UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div style={{ background: "#eee", padding: "10px" }}>
      <h3>Navbar</h3>
      <p>Welcome, {user?.name}</p>
    </div>
  );
};

export default Navbar;