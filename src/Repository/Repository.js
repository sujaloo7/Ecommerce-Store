import axios from "axios";
// const baseDomain = "https://scholarshipbackend.herokuapp.com/api";
// const baseDomain = "http://localhost:4300/api";
const baseDomain = "https://api.almastarts.com/api";
// const imageDomain = "http://localhost:4300";
const imageDomain = "https://api.almastarts.com";
// const baseDomain = "https://calm-hen-woolens.cyclic.app/api";
// const imageDomain = "https://calm-hen-woolens.cyclic.app/";
const authorization_prefix = "Bearer ";

export const customHeaders = {
  Accept: "application/json",
  /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;
export const imageUrl = `${imageDomain}`;
export default axios.create({
  baseUrl,
  headers: {
    Authorization: localStorage.getItem("auth_token"),
  },
});
export const serializeQuery = (query) => {
  try {
    return Object.keys(query)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
      )
      .join("&");
  } catch {}
};
