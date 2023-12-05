var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__iner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showgallery(){

    if (currentIndex ==images.length- 1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    //hien thi
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
       
        showgallery()
    });
});
close.addEventListener('click', function () {
    gallery.classList.remove('show');
});

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove("show")
    }
})

prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--
        showgallery()
    }
})
next.addEventListener('click',function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showgallery()
    }
})

