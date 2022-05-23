// export const BASE_URL='https://api.thefreshify.com/api';
export const API_BASED_URL = 'https://api.thefreshify.com/api/';
export const IMAGE_BASED_URL = 'https://api.thefreshify.com/storage/';

export const getApi = endpoint => API_BASED_URL + endpoint;

export const FrontProductUrl = getApi('front/products');
export const PostCreateUrl = getApi('posts/createpost');
export const createCartIdUrl = getApi('front/cart');
