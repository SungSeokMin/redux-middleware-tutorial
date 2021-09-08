import * as postsAPI from '../api/post';

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });

  // API를 호출
  try {
    const posts = await postsAPI.getPosts();

    // 성공했을 때
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (err) {
    // 실패했을 때
    dispatch({ type: GET_POSTS_ERROR, error: err });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });

  // API를 호출
  try {
    const post = await postsAPI.getPost(id);

    // 성공했을 때
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (err) {
    // 실패했을 때
    dispatch({ type: GET_POST_ERROR, error: err });
  }
};

// 리듀서 작성

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.posts,
          error: null,
        },
      };

    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: false,
          data: action.post,
          error: null,
        },
      };

    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    default:
      return state;
  }
}
