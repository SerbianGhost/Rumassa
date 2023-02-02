const sliders = document.querySelectorAll('.slider');
let w = document.documentElement.clientWidth;
sliders.forEach(el =>{
   function touchMoving(event){
      if(!x1){
         return false
      }
      let x2 = event.touches[0].clientX;
      let xMove = x2 - x1;
         if(xMove<0){
         slideRight()
      }
      else if (xMove>0){
         slideLeft();
      }
      x1 = 0
   }
   function Touching(event){
      const firstTouch = event.touches[0];
      x1 = firstTouch.clientX
   }
   function slideLeft(){
      position = position - step;
      item.forEach(el =>{
         if(position < 0){
            position = currentLine;
         }
         el.style.left = - position + '%';
      })
   }
   function slideRight(){
      position = position + step;
      item.forEach(el =>{
         if(position > currentLine){
            position = 0;
         }
         el.style.left = - position + '%';
      })
   }
   let x1 = 0;
   let item = el.querySelectorAll('.slider__el')
   let position = 0;
   let step = 10;
   let len =  3;
   let currentLine = (position + step) * (item.length-len);
   el.addEventListener('touchmove', touchMoving);
   el.addEventListener('touchstart', Touching);
   el.addEventListener('click', (e)=>{
      let currentSlider = e.target;
      let prev = currentSlider.classList.contains('prev');
      let next = currentSlider.classList.contains('next');
      if(next){
        slideRight(position)
      }
      if(prev){
        slideLeft(position);
      }
})
});