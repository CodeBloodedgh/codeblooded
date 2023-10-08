let currentIndex = 0;
const slider = document.querySelector('slider')
const images = document.querySelectorAll('.slider.img')

function slide(direction){
    if(direction=="next"){
        currentIndex++;
    }
    else{currentIndex--;}

//ensuring the index stas withon border

if (currentIndex<0){
    currentIndex = images.length -1;
}
else if (currentIndex >= images.length){
    currentIndex = 0;
}

const translateX = -currentIndex * 300;

slider.style.transform = 'translateXtranslateX}px)';
}

document.querySelector('.prev-buton').addEventListener('click',() =>slide('prev'));
document.querySelector('.next-buton').addEventListener('click',() =>slide('prev'));