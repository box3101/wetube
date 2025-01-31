const handleJoin = (req, res) => res.send("Join");
const handleLogin = (req, res) => res.send("Login");

const handleLogout = (req, res) => res.send("Logout");
const handleEditUser = (req, res) => res.send("Edit User");
const handleDeleteUser = (req, res) => res.send("Delete User");
const handleSeeUser = (req, res) => res.send("See User");

export { handleJoin, handleEditUser, handleDeleteUser, handleLogin, handleLogout, handleSeeUser };

