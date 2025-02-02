const videos =[
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
]

const handleTrending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos })
}

const handleSeeVideo = (req, res) => {
  const {id} = req.params;
  const video = videos[id-1];
  return res.render("watch", { pageTitle: `Watch ${video.title} Video`});
}
const handleSearch = (req, res) => res.send("Search");



const handleEditVideo = (req, res) => res.render("edit");
const handleDeleteVideo = (req, res) => res.send("Delete Video");
const handleUploadVideo = (req, res) => res.send("Upload Video");

export { handleTrending, handleSeeVideo, handleSearch, handleEditVideo, handleDeleteVideo, handleUploadVideo };
