import axios from "axios";
export const login = (body) => {
  const response = axios.post("https://dummyjson.com/auth/login", body);
  console.log(response);
  return response;
};
