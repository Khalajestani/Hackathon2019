import Axios from "axios";

const GetSupportConversationText = () => {
  const url = `http://localhost:33711/api/Text`;

  return Axios.get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export default GetSupportConversationText;
