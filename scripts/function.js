let buton_Menu = document.getElementById('button-Menu');
let button_Nav = document.getElementById('buttom-nav');
let contador = 0;

buton_Menu.addEventListener("click", function(){
    let nav_Header = document.getElementById('nav-Header');

    if(contador === 0){
        nav_Header.style.transform = 'translateX(-15px) translateY(220px)'
        contador ++;
    }else{
        nav_Header.style.transform = ''
        nav_Header.style.transform = ''
        contador = 0;
    }
});

button_Nav.addEventListener("click", function(){
    let nav_Header = document.getElementById('nav-Header');

    if(contador === 0){
        nav_Header.style.transform = 'translateX(-15px) translateY(220px)'
        contador ++;
    }else{
        nav_Header.style.transform = ''
        nav_Header.style.transform = ''
        contador = 0;
    }
});