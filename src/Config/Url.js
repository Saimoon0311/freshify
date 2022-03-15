export const API_BASED_URL = 'https://api.thefreshify.com/api/';
export const IMAGE_BASED_URL = 'http://api.thefreshify.com/storage/';

export const getApi = endpoint => API_BASED_URL + endpoint;

export const LoginUrl = getApi('auth/login');
export const SignUpUrl = getApi('auth/register');
export const FrontProductUrl = getApi('front/products');
export const PostCreateUrl = getApi('posts/createpost');
export const ImageUploadUrl = getApi('upload');
export const LikeUrl = getApi('posts/');
export const UpdatePostUrl = getApi('posts/updatePost/');
export const DeletePostUrl = getApi('posts/');
export const GetAllPostUrl = getApi('posts/post/AllPost');
export const HidePostUrl = getApi('posts/');
export const UpdateUserUrl = getApi('users/');
export const FollowUserUrl = getApi('users/');
export const getaUserUrl = getApi('users/');
export const getAllFriendsUrl = getApi('users/friends/');
export const getUserAllPostUrl = getApi('posts/profile/');
