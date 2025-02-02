const fakeUser = {
  username: "nico",
  loggedIn: false,
};


const handleTrending = (req, res) => res.render("home" , 
  {pageTitle: "Home" , fakeUser} 
);
const handleSeeVideo = (req, res) => res.render("watch");
const handleSearch = (req, res) => res.send("Search");
const handleEditVideo = (req, res) => res.render("edit");
const handleDeleteVideo = (req, res) => res.send("Delete Video");
const handleUploadVideo = (req, res) => res.send("Upload Video");

export { handleTrending, handleSeeVideo, handleSearch, handleEditVideo, handleDeleteVideo, handleUploadVideo };
