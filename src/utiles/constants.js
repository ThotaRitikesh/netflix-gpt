export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL =
  "https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6";

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CND_LINK = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "English", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "Telugu", name: "Telugu" },
  { identifier: "Arabic", name: "Arabic" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
