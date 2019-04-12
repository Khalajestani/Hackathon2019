import Axios from "axios";

const StartConversationText = () => {
  const callerURL = `http://fbce5676.ngrok.io/api/Text`;
  Axios.post(callerURL);

  const supportURL = `http://localhost:33711/api/Text`;
  Axios.post(supportURL);
};

export default StartConversationText;
