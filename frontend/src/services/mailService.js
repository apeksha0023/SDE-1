import axios from "axios";

const BASE_URL = "https://sde-1-8pv1.onrender.com/api/mails";

export const getInbox = async () => {
  const res = await axios.get(`${BASE_URL}/inbox`);
  return res.data;
};

export const getSent = async () => {
  const res = await axios.get(`${BASE_URL}/sent`);
  return res.data;
};

export const getDrafts = async () => {
  const res = await axios.get(`${BASE_URL}/drafts`);
  return res.data;
};

export const getTrash = async () => {
  const res = await axios.get(`${BASE_URL}/trash`);
  return res.data;
};
