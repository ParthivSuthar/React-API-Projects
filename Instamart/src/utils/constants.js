export const LOGO_URL =
  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto//InstamartAssets/DWeb%20Changes/Instamart%20log.png";

export const ASSET_URL =
  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/";

export const CATEGORY_URL = "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1135722&primaryStoreId=1135722&secondaryStoreId=1396282&clientId=INSTAMART-APP"
// export const getCategoryUrl = (offset) =>
//   `https://www.swiggy.com/api/instamart/home/v2?offset=${offset}&layoutId=4987&storeId=1135722&primaryStoreId=1135722&secondaryStoreId=1396282&clientId=INSTAMART-APP`;

export const CATEGORY_LIST = (categoryName) => `https://www.swiggy.com/api/instamart/category-listing/v2?categoryName=${categoryName}&taxonomyType=Speciality%20taxonomy%201&offset=0&storeId=1135722&primaryStoreId=1135722&secondaryStoreId=1396282`