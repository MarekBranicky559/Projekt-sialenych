let likes = 0;
let dislikes = 0;

const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

likeButton.addEventListener('click', (e) => {
    likes++;
    document.getElementById('l').innerText = likes;
})

dislikeButton.addEventListener('click', (e) => {
    dislikes++;
    document.getElementById('d').innerText = dislikes;
})