let drumnumber=document.querySelectorAll(".drum").length;
for(let i=0;i<drumnumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let  k=this.InnerText; 
        makesound(k);
        animation(k);
     });
}
document.addEventListener("keypress",function(event){
        makesound(event.key);
        animation(event.key);
});
function makesound(key){
    switch (key) {
        case "s":
        let kick=new Audio("sound/kick-bass.mp3");
        kick.play();
        break;
        case "h":
         let tom2 =new Audio("sound/tom-2.mp3");
         tom2.play();
         break;
         case "u":
         let tom3=new Audio("sound/tom-3.mp3");
         tom3.play();
         break;
         case "b":
         let tom4=new Audio("sound/tom-4.mp3");
         tom4.play();
         break;
         case "i":
         let snare=new Audio("sound/crash.mp3");
         crash.play();
         break;
         case "o":
         let tom1=new Audio("sound/tom-1.mp3");
         tom1.play();
         break;
        case "m":
            let crash=new Audio("sound/snare.mp3");
            snare.play();
            break;
         
        default:console.log(buttonInnerText);
    }
}
function animation(key){
    let a=document.querySelector("."+ key);
    k.classList.add("Pressed");
    setTimeout(function(){
        k.classList.remove("pressed");
    },200);
}  