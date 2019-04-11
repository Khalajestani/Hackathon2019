import Axios from "axios";

const GetConversationText = () => {
  const url = `http://b94a30bf.ngrok.io/api/Text`;

  return Axios.get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export default GetConversationText;
