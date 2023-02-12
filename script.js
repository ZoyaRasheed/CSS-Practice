let flag = 0;

function controller(y){

     flag = y; 
     slideShow(flag)

}

slideShow(flag);
function slideShow(num){

    let slides = document.querySelectorAll(".img");
    for(let x of slides){
        x.style.display = 'none';
    }
    slides[num].style.display = 'block';
   
}


