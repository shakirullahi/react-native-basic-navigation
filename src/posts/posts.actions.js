import {postsStore} from './posts.store';

export async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const posts = await response.json();
  postsStore.setPosts(posts);
}

export async function addPost(post) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const postToAdd = await response.json();
  postsStore.addPost(postToAdd);
}
