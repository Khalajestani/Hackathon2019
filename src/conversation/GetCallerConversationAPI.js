import Axios from "axios";

const GetCallerConversationText = () => {
  const url = `http://809b9e64.ngrok.io/api/Text`;

  return Axios.get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export default GetCallerConversationText;
