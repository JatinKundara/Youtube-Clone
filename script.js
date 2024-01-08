let btn = document.querySelector('#sub-btn')
let check = 0;

btn.addEventListener('click', function(){
   if(check == 0){
    btn.style.background = "#272727"
    btn.style.color = "white"
    btn.innerHTML = "<i class='fa-solid fa-bell me-1'></i> Subscribed"
    check = 1;
   }else{
    btn.style.background = "white"
    btn.style.color = "black"
    btn.innerHTML = "Subscribe"
    check = 0;
   }
})


let likeBtn = document.querySelector("#like-btn");
let likeBtnI = document.querySelector("#like-btn i");
let disLikeBtn = document.querySelector("#dislike-btn");
let disLikeBtnI = document.querySelector("#dislike-btn i");

likeClick = 0;
likeBtn.addEventListener("click", function(){
   if(likeClick == 0){
      likeBtnI.className = "ri-thumb-up-fill"
      likeClick = 1
   }else{
      likeClick = 0
      likeBtnI.className = "ri-thumb-up-line"
   }
})

disLikeClick = 0;
disLikeBtn.addEventListener("click", function(){
   if(disLikeClick == 0){
      disLikeBtnI.className = "ri-thumb-down-fill"
      disLikeClick = 1
   }else{
      disLikeClick = 0
      disLikeBtnI.className = "ri-thumb-down-line"
   }
})



let videoTitle = document.querySelector(".box-left h2");
let videoSrc = document.querySelector(".box-left video");
let likeCount = document.querySelector("#like-count");

let music1 = document.querySelector("#music1");
music1.addEventListener("click", function(){
   videoTitle.innerHTML = "Teri Ho Na Saki | Official Video | Shayad Woh Sune | KING"
   videoSrc.src = "media/Teri Ho Na Saki.mp4"
   likeCount.innerHTML = "183K"
   likeBtnI.className = "ri-thumb-up-line"
   disLikeBtnI.className = "ri-thumb-down-line"
})

let music2 = document.querySelector("#music2");
music2.addEventListener("click", function(){
   videoTitle.innerHTML = "Sarkaare | Official Music Video | New Life | KING"
   videoSrc.src = "media/Sarkaare.mp4"
   likeCount.innerHTML = "191K"
   likeBtnI.className = "ri-thumb-up-line"
   disLikeBtnI.className = "ri-thumb-down-line"
})


let music3 = document.querySelector("#music3");
music3.addEventListener("click", function(){
   videoTitle.innerHTML = "Hum Tumse | Official Video | Shayad Woh Sune | KING"
   videoSrc.src = "media/Hum Tumse.mp4"
   likeCount.innerHTML = "85K"
   likeBtnI.className = "ri-thumb-up-line"
   disLikeBtnI.className = "ri-thumb-down-line"
})


let music4 = document.querySelector("#music4");
music4.addEventListener("click", function(){
   videoTitle.innerHTML = "King - Ghumshudaa (Official Video) | Mashhoor Chapter 1 | Latest Punjabi Songs 2019"
   videoSrc.src = "media/Ghumshudaa.mp4"
   likeCount.innerHTML = "726K"
   likeBtnI.className = "ri-thumb-up-line"
   disLikeBtnI.className = "ri-thumb-down-line"
})


let music5 = document.querySelector("#music5");
music5.addEventListener("click", function(){
   videoTitle.innerHTML = "CROWN | Introduction | New Life Album | King"
   videoSrc.src = "media/CROWN.mp4"
   likeCount.innerHTML = "219K"
   likeBtnI.className = "ri-thumb-up-line"
   disLikeBtnI.className = "ri-thumb-down-line"
})