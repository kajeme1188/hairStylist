
let index = 0;

display();

function display(){
    let images = document.getElementsByClassName("home-image");
    for(let i = 0; i < images.length; i++){
            console.log("none " + i)
            images[i].style.display = "none";
        }
        index++;
        if(index > images.length){
            console.log("imdex larger than images length")
            index = 1;
        }
        console.log("Not The case");
        images[index - 1].style.display = "block";
        setTimeout(display, 2000);
}
