import Axios from "axios";

const StartConversationText = () => {
  const callerURL = `http://809b9e64.ngrok.io/api/Text`;
  Axios.post(callerURL);

  const supportURL = `http://localhost:33711/api/Text`;
  Axios.post(supportURL);
};

export default StartConversationText;
