import axios from "axios";
const KEY = "AIzaSyCVdjx_eS3HOh5QP2Nw87qYqELDtzP6x3M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  }
});
