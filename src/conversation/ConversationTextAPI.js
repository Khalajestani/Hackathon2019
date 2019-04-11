import Axios from "axios";

const ConversationText = () => {
  const url = `wwwwwwww/signup`;
  const body = {};

  return Axios.post(url, body)
    .then(response => {
      return {
        Registered: true,
        Token: response.data.token
      };
    })
    .catch(error => {
      return Promise.reject(new Error(error.response));
    });
};

export default ConversationText;
