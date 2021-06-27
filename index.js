var first_person_dice = Math.floor(Math.random() * 6) + 1;
var second_person_dice = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src" ,"images/dice" + first_person_dice +".png") ;
document.querySelector(".img2").setAttribute("src" ,"images/dice" + second_person_dice +".png") ;

if (first_person_dice > second_person_dice){
    document.querySelector("h1").textContent = "Player 1 won.";
}

else if (first_person_dice < second_person_dice){
    document.querySelector("h1").textContent = "Player 2 won ";
}

else{
    document.querySelector("h1").textContent = "Draw!";
}