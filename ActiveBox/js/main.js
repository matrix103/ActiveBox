let offset = 0;
const sliderline= document.querySelector('.slider_line');

document.querySelector('.button_next').addEventListener('click',function () {
  offset+=1000;
  if (offset>2000){
    offset=0;
  }
  sliderline.style.left = -offset + 'px';
});
