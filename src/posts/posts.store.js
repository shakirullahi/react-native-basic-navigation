import * as remx from 'remx';
const initialState = {
  posts: [],
};
const state = remx.state(initialState);

const getters = remx.getters({
  getPosts() {
    return state.posts;
  },
});

const setters = remx.setters({
  setPosts(posts) {
    state.posts = posts;
  },
  addPost(post) {
    state.posts = [...state.posts, post];
  },
});

export const postsStore = {
  ...getters,
  ...setters,
};
