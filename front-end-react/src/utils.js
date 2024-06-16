import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

export const fetchQuestionsData = async (id) => {
  try {
    return axios.get(`
      ${BASE_URL}/quiz/${id}`);
  } catch (error) {
    console.error(error);
  }
};
export const fetchSummary = async (id) => {
  try {
    return axios.get(`${BASE_URL}/summary/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export function extractHTML(markdown) {
  const regex = /```html([\s\S]*?)```/g;
  const match = regex.exec(markdown);
  return match ? match[1].trim() : null;
}
