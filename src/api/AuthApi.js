import axios from "../utils/axios";

export const loginApi = async (user) => {
  try {
    const { data } = await axios.post("/auth/local", user);

    return data;
  } catch (err) {
    throw err;
  }
};

export const registerApi = async (user) => {
  try {
    const { data } = await axios.post("/auth/local/register", user);
    return data;
  } catch (err) {
    throw err;
  }
};
