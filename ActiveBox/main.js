let offset = 0;
const sliderline= document.querySelector('.slider_line');

document.querySelector('.button_next_1').addEventListener('click',function(){
  offset+=1900;
  if (offset>1900){
    offset=0;
  }
  sliderline.style.left = -offset + 'px';
});

document.querySelector('.button_revs_1').addEventListener('click',function(){
  offset-=1900;
  if (offset<-1900){
    offset=0;
  }
  sliderline.style.left = +offset + 'px';
});

document.querySelector('.button_next_2').addEventListener('click',function(){
  offset+=1900;
  if (offset>1900){
    offset=0;
  }
  sliderline.style.left = -offset + 'px';
});

document.querySelector('.button_revs_2').addEventListener('click',function(){
  offset-=1900;
  if (offset<-1900){
    offset=0;
  }
  sliderline.style.left = +offset + 'px';
});
