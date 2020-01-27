import get from "lodash/get";
import axios from "axios";

//TODO: expand this to provide more options for fetching
export const httpGet = (url, options) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => resolve(get(response, "data")))
      .catch(error => {
        reject(error);
      });
  });
