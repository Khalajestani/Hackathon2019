import Axios from "axios";

const StartConversationText = () => {
  const url = `http://b94a30bf.ngrok.io/api/Text`;
  return Axios.post(url);
};

export default StartConversationText;
