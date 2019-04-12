import Axios from "axios";

const GetCallerConversationText = () => {
  const url = `http://fbce5676.ngrok.io/api/Text?analyze=0`;

  return Axios.get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      return Promise.reject(new Error(error));
    });
};

export default GetCallerConversationText;
