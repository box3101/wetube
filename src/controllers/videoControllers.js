const handleTrending = (req, res) => res.send("Trending");

const handleSeeVideo = (req, res) => {
  console.log(req.params);
  res.send("See Video");
}
const handleSearch = (req, res) => res.send("Search");
const handleEditVideo = (req, res) => res.send("Edit Video");
const handleDeleteVideo = (req, res) => res.send("Delete Video");
const handleUploadVideo = (req, res) => res.send("Upload Video");

export { handleTrending, handleSeeVideo, handleSearch, handleEditVideo, handleDeleteVideo, handleUploadVideo };
