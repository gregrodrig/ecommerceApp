import { apiConfig } from "./config.js";

export const get = async (endpoint) => {
  const response = await fetch(`${apiConfig.baseUrl}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
