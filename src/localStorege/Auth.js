export const token = (token) => {
  localStorage.setItem("token", token);
};

export const isAuthenticated = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  return "success";
};
