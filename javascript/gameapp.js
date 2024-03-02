let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");
const generatecomchoice=()=>
{
    const option=["scissor","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}
const drawGame=()=>
{
    console.log("Game was Drawn");
    msg.innerText=("Match Drawn! Play Again");
}
const showWinner=(userWin)=>
{
    if(userWin)
    {
       console.log("You Win!") ;
       msg.innerText="You Win.";
       msg.style.backgroundColor="green";
       userScore++;
       userScorePara.innerText=userScore;
    }
    else{
        console.log("You loose ---- try again!");
        msg.innerText=("You lose.")
        msg.style.backgroundColor="red";
        computerScore++;
        computerScorePara.innerText=computerScore;

    }
};
const playGame=(user_choice)=>
{
 console.log("user choice = ",user_choice);
 //generate computer choice
 const compchoice=generatecomchoice();
 console.log("comp choice = ",compchoice);
 if(user_choice===compchoice)
 {
       drawGame();
 }
 else
 {
    let userWin=true;
    if(user_choice==="rock")
    {
        userWin= compchoice==="paper"? false:true;
    }
    else if(user_choice==="paper")
    {
    }
    else
    {
        compchoice==="rock"? false:true;
    }
    showWinner(userWin);
 }
}

choices.forEach((choice)=>
{
choice.addEventListener("click",()=>
{
    const user_choice=choice.getAttribute("id");
   
    playGame(user_choice);
});
});