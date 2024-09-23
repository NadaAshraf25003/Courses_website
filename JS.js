let searchBtn =document.querySelector('#search-btn');
let searchBar =document.querySelector('.search-bar-container');

let formBtn =document.querySelector('#login-btn');
let formBtn1 =document.querySelector('.can1');
let formBtn2 =document.querySelector('.can2');
let formBtn3 =document.querySelector('.can3');
let formBtn4 =document.querySelector('.can4');
let formBtn5 =document.querySelector('.can5');
let formBtn6 =document.querySelector('.can6');
let formBtn7 =document.querySelector('.can7');
let formBtn8 =document.querySelector('.can8');
let formBtn9 =document.querySelector('.can9');

let loginform =document.querySelector('.login-form-container');
let formclose =document.querySelector('#form-close');

let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');

let vidBtn =document.querySelectorAll('.vid-btn');



window.onscroll=() =>{
    searchBtn.classList.remove('fa-times'); //to change the icon search
    searchBar.classList.remove('active');   // to dispaly the searck btn
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active');
    loginform.classList.remove('active'); 
}




searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times'); //to change the icon search
    searchBar.classList.toggle('active');   // to dispaly the searck btn
})


formBtn.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formclose.addEventListener('click',() =>{
    loginform.classList.remove('active');   
})
formBtn1.addEventListener('click',() =>{
    loginform.classList.add('active');   
})

formBtn2.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn3.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn4.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn5.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn6.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn7.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn8.addEventListener('click',() =>{
    loginform.classList.add('active');   
})
formBtn9.addEventListener('click',() =>{
    loginform.classList.add('active');   
})


// moon and sun 
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');  
})


vidBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
})

// swiper start 
var swiper = new Swiper(".mySwiper", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});
// swiper end 


//dark and light start
var icon=document.getElementById("icon1");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="Images/sun.png";
    }else{
        icon.src="Images/moon (4).png";
    }
}
// dark and light end





