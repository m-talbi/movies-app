const createShowObj = (show, likes) => ({
  id: show.id,
  name: show.name,
  genres: show.genres,
  likes,
  summary: show.summary,
  officialSite: show.officialSite,
  image: show.image.original,
});
 
export default createShowObj;