const like = document.querySelector('.like');
var likecount = parseInt(document.getElementById("likeCount").textContent);
const heartIcon = document.getElementById('heartIcon');
const comment = document.querySelector('.comment');
const share = document.querySelector('.fa-paper-plane');

like.addEventListener("click", LikeFunction);
comment.addEventListener("click", commentFunction);

let counter = likecount+1;
//console.log(count);
function LikeFunction() {
    let count = counter++;
    document.getElementById("likeCount").textContent = count;
    

    
        heartIcon.classList.add('heart-active');
     
}
function commentFunction() {
    alert("hello")
}