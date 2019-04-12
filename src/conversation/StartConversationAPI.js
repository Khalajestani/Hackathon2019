import Axios from "axios";

const StartConversationText = () => {
  // const callerURL = `http://b94a30bf.ngrok.io/api/Text`;
  // Axios.post(callerURL);

  const supportURL = `http://localhost:33711/api/Text`;
  Axios.post(supportURL);
};

export default StartConversationText;
