const videos =[
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
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
  return res.render("watch", { pageTitle: `Watch ${video.title} Video`, video });
}

const handleGetEditVideo = (req, res) => {
  const {id} = req.params;
  const video = videos[id-1];
  return res.render("edit", { pageTitle: `Edit ${video.title} Video`, video });
}
const handlePostEditVideo = (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  videos[id-1].title = title;
  return res.redirect(`/videos/${id}`);
}


export { handleTrending, handleSeeVideo, handleGetEditVideo, handlePostEditVideo };
