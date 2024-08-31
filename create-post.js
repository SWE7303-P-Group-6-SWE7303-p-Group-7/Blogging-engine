document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const urlParams = new URLSearchParams(window.location.search);
    const editIndex = urlParams.get('edit');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const { userId } = currentUser;
    let posts = JSON.parse(localStorage.getItem(`posts_${userId}`)) || [];

    if (editIndex !== null) {
        const post = posts[editIndex];
        document.getElementById('title').value = post.title;
        document.getElementById('content').value = post.content;
        
        postForm.onsubmit = (event) => {
            event.preventDefault();
            posts[editIndex] = {
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            };
            localStorage.setItem(`posts_${userId}`, JSON.stringify(posts));
            window.location.href = 'index.html'; 
        };
    } else {
        postForm.onsubmit = (event) => {
            event.preventDefault();
            posts.push({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            });
            localStorage.setItem(`posts_${userId}`, JSON.stringify(posts));
            window.location.href = 'index.html'; 
        };
    }
});
