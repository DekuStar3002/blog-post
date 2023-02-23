import axios from "axios";

const MakeRequest = async (configObj, navigate) => {
  try {
    const { data } = await axios(configObj);
    return data;
  } catch (error) {
    const errorCode = error.response?.status;
    if(errorCode) {
      navigate(`/error/${errorCode}`);
    } else {
      navigate('/error');
    }
  }
}

export default MakeRequest;