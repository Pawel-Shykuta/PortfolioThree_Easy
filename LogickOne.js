

var Osnovnaya = true;

function Moove(){
    var firstPos = Osnovnaya? -450:0;
    var SecondPos = Osnovnaya? 0:-450;
    var mooving = Osnovnaya? 10: -10;
    var links = document.getElementsByClassName('links')[0];
    var time = setInterval(Posasuy,10);
    var button = document.getElementById('burger');

    function Posasuy(){
        if((Osnovnaya && firstPos>=SecondPos )||(!Osnovnaya && firstPos <=SecondPos)){
            clearInterval(time);
            Osnovnaya = !Osnovnaya;
            if(Osnovnaya && firstPos >= -450){
                button.classList.remove('open');
            }else{
                button.classList.add('open');
            }
        }else{
            firstPos +=mooving;
            links.style.right = firstPos+'px';
        }
    }

}



const images = document.querySelectorAll('.Slide');  // Массив с тегом каждого слайдера
let imagesToShow = 4; // Количество изображений, которые должны отображаться одновременно
let startIndex = 0;
    

setInterval(function() {
    let windowWidth = window.innerWidth;  

    if (windowWidth <= 450) {
        imagesToShow = 1;
    } else {
        imagesToShow = 4;
    }
    showImages(startIndex);
}, 100);





function showImages(index) {

    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i >= index && i < index + imagesToShow) {
            img.classList.add('active');
        }
    });
    startIndex = index;
}

function Prev() {
    let newIndex = startIndex - 1;
    if (newIndex < 0) {
        newIndex = Math.max(0, images.length - imagesToShow);
    }
    showImages(newIndex);
}

function Next() {
    let newIndex = startIndex + 1;
    if (newIndex > images.length - imagesToShow) {
        newIndex = 0;
    }
    showImages(newIndex);
}

showImages(0);

var btn = document.getElementById('FormBtn').addEventListener('click', clear);
var form = document.getElementById('labForm');

function clear(){
    alert(form.value);
    form.value = " ";  
}
