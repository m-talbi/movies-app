import displayLikes from "../AppComponents/displayLikes.js";
import { AddLike, getLikes } from "../InvolvementService/LikeService.js";

const handlePopupLikeBtn = async (movieId) => {
  await AddLike(movieId);
  const showLikes = await getLikes();
  displayLikes(showLikes);
}

export default handlePopupLikeBtn;