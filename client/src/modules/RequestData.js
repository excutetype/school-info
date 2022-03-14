import axios from "axios";

class RequestData {
  static get(url, parameters) {
    const requestUrl = new URL(url, document.URL);
    requestUrl.search = new URLSearchParams(parameters);

    return new Promise((resolve, reject) => {
      axios
        .get(requestUrl)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          const status = err.response.status;
          const message = err.response.data;

          reject(`${status} Error!\n${message}`);
        });
    });
  }
}

export default RequestData;
