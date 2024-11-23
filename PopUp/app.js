
let popup   =   document.getElementById('popup');
let btns =   document.querySelector('.btn');

// console.log(addBtn);

function openPopup(){
    popup.classList.add('open-popup');
    btns.style.opacity = '0';
    btns.style.pointerEvents = 'none';
    btns.style.display = 'none';
    
}

function closePopup(){
    popup.classList.remove('open-popup');
    btns.style.display = 'block';
    btns.style.opacity = '1';
    btns.style.pointerEvents = 'auto';
    

}
