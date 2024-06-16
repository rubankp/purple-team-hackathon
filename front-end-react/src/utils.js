import axios from "axios";

export const fetchQuestionsData = async (id) => {
  try {
    return axios.get(`http://192.168.149.68:5000/yt_quiz/${id}`);
  } catch (error) {
    console.error(error);
  }
};
export const fetchSummary = async (id) => {
  try {
    return axios.get(`http://192.168.149.68:5000/yt_summary/${id}`);
  } catch (error) {
    console.error(error);
  }
};


export function extractHTML(markdown) {
    const regex = /```html([\s\S]*?)```/g;
    const match = regex.exec(markdown);
    return match ? match[1].trim() : null;
  }
  