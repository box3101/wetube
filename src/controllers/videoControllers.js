const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");
const handleWatch = (req, res) => res.send("Watch");
const handleEdit = (req, res) => res.send("Edit");
const handleDelete = (req, res) => res.send("Delete");

export { handleHome, handleJoin, handleWatch, handleEdit, handleDelete };
