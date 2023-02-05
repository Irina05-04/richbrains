let cards = document.querySelector('.cards');
cards.addEventListener('click', (e) => {
   let target = e.target;
   if(target.classList.contains('card_front')){
      let el = target.parentNode.querySelector('.card_back');
      el.style.transform = 'rotateY(0deg)';
   }
   if(target.classList.contains('round__img')){
      let el = target.parentNode;
      el.parentNode.style.transform = 'rotateY(180deg)';
   }
});