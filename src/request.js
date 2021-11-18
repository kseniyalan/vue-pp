import axios from 'axios';

const baseURL = process.env.BASE_URL;

const ax = axios.create({baseURL});

//Posts List
export const getPostsList = async () => {
  let response;
  try {
    response = await ax.get('posts.json');
  } catch {
    throw new Error('Posts loading failed');
  }
  return response.data;
};

//Single post
export const getSinglePost = async postId => {
  const url = `post_${postId}.json`;
  let response;
  try {
    response = await ax.get(url);
  } catch {
    throw new Error('Single post loading failed');
  }
  return response.data;
};