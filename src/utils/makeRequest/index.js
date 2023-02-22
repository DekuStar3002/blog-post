import axios from "axios";

const MakeRequest = async (configObj) => {
  const { data } = await axios(configObj);
  return data;
}

export default MakeRequest;