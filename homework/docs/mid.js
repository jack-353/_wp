function submitPost() {
  const content = document.getElementById('post-content').value;
  if (content.trim() === '') return;

  const post = document.createElement('div');
  post.className = 'post';
  post.innerText = content;

  document.getElementById('feed').prepend(post);
  document.getElementById('post-content').value = '';
}
