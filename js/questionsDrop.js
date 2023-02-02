const question = document.querySelectorAll('.questions__item');
question.forEach(el =>{
   let answer = el.querySelector('.questions__answer');
   let btn = el.querySelector('.questions__btn');
   btn.addEventListener('click', (e)=>{
      answer.classList.toggle('active');
      btn.classList.toggle('btn--active')
   })
})