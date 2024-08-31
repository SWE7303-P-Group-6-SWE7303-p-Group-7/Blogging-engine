document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const logoutBtn = document.getElementById('logoutBtn');
    const welcomeMessage = document.getElementById('welcomeMessage');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const { firstName, lastName, userId } = currentUser;
    welcomeMessage.innerText = `Hi, ${firstName} ${lastName}. Welcome to your blogging engine!`;
    let posts = JSON.parse(localStorage.getItem(`posts_${userId}`)) || [];

    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            postsContainer.appendChild(postDiv);
        });
    }

    window.deletePost = (index) => {
        if (confirm('Are you sure you want to delete this post?')) {
            posts.splice(index, 1);
            localStorage.setItem(`posts_${userId}`, JSON.stringify(posts));
            displayPosts();
        }
    };

    window.editPost = (index) => {
        window.location.href = `create-post.html?edit=${index}`;
    };

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    displayPosts();
});
