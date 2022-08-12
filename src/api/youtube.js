import axios from "axios";

const KEY = "AIzaSyDSAKsPsdfkdtgZnC7i4JQE_GU7pqVPMrs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
