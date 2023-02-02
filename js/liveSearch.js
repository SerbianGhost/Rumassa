const headerInput = document.querySelector('.header__input');
headerInput.oninput = function () {
   let val = this.value.trim();
   let searchItem = document.querySelectorAll('.header__search-item');
   if(val != ''){
      searchItem.forEach(el =>{
         if(el.innerText.search(val) == -1){
            el.classList.add('hide');
         }
         else{
            el.classList.remove('hide');
            let str = el.innerText;
            el.innerHTML = insertMark(str,el.innerText.search(val), val.length)
         }
      })
   }
   else {
      searchItem.forEach(el=>{
         if(!el.classList.contains('hide')){
            el.classList.add('hide');
         }
      })
   }
}

function insertMark (string, pos, len){
   return string.slice(0, pos) + '<span class="mark">' + string.slice(pos, pos + len) +  '</span>' + string.slice(pos + len);
}

