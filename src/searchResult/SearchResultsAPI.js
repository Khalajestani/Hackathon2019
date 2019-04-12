import Axios from "axios";
import { GetSearchKey } from "./SearchKey.js";

const GetSearchResults = () => {
  var url = `http://LT-16-192/SearchResults/api/questions`;

  const searchKey = GetSearchKey();
  url = `${url}/${searchKey}`;

  return Axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(new Error(error.response));
    });
};

export default GetSearchResults;
