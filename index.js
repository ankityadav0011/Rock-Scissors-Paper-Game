let userscore =0;
let compscore = 0;

let choice = document.querySelectorAll(".img");
let msg = document.querySelector("#msg");
let cont = document.querySelector(".msgcontainer");

let userscr = document.querySelector("#userscore");
let compscr = document.querySelector("#compscore");

const gencompchoice=()=>{
     const options = ["rock","paper","scissor"];
    const randomidx= Math.floor(Math.random()*3); 
    return options[randomidx];
}
const drawgame=()=>{
     console.log("Game is Draw");
     msg.innerText= "Game is Draw,Play Again";
     msg.style.backgroundColor= "gray";
}
const showresult=(userwin,userchoice,compchoice)=>{
            if(userwin==true){
                userscore++;
                userscr.innerText=userscore;
                console.log("you Win")
                msg.innerText= `You win..! Your ${userchoice} beats ${compchoice}`;
                msg.style.backgroundColor="green";
            }
            else{
                compscore++;
                compscr.innerText=compscore;
                console.log("You Lost");
                msg.innerText= `You Lost..! ${compchoice} beats your ${userchoice}`;
                msg.style.backgroundColor ="red"; 
            }
};
const playgame=(userchoice)=>{
      console.log("user choice",userchoice); 
      const compchoice=gencompchoice();  
      console.log("comp choice",compchoice);
      if(userchoice=== compchoice){
        drawgame();
      }
      else{
        let userwin = true;
        if(userchoice==="rock"){
            // comp must generated scissor or paper
          userwin= compchoice==="paper" ? false :true; 
        }
        else if(userchoice ==="scissor"){
            userwin= compchoice === "paper"?true:false;
        }
        else{
            userwin= compchoice==="rock"?true:false;
        }
        showresult(userwin,userchoice,compchoice);
      }
      
};

// for each div or choices 
choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
          const userchoice = choices.getAttribute("id");
         playgame(userchoice);
    });
});