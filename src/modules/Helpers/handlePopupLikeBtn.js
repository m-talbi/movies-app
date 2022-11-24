import displayLikes from "../AppComponents/displayLikes";
import { AddLike, getLikes } from "../InvolvementService/LikeService";

const handlePopupLikeBtn = async (movieId) => {
  await AddLike(movieId);
  const showLikes = await getLikes();
  displayLikes(showLikes);
}

export default handlePopupLikeBtn;