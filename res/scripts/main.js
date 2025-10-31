const postsContainer = document.getElementById('posts');
fetch('https://api.jsonbin.io/v3/b/6904d6c3ae596e708f3a7c43')
  .then(response => response.json())
  .then(data => {
    const posts = data.record;
    postsContainer.innerHTML = '';
  posts.slice().reverse().forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML = `
        <div class="post-header">
          <div class="user-info">
            <img src="res/images/profile.png" alt="Profile picture" class="profile-pic">
          </div>
          <div class="date">${new Date(post.created_at).toLocaleDateString()}</div>
        </div>
        ${post.image ? `<img src="res/images/${post.image}" alt="Post image">` : ''}
        <p>${post.content}</p>
        <div class="like">👍 ${post.likes}</div>
      `;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    postsContainer.innerHTML = 'Failed to load posts.';
    console.error(error);
  });