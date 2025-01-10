let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>
    {  const choiceid= choice.getAttribute("id");
        console.log("choice was clicked",choiceid);
        playgame(choiceid);
    })
    
});

const playgame=(choiceid)=>
    {
       console.log("userchoice=", choiceid);
       const compchoice= gencompchoice();
       console.log("computer choice =",compchoice);
       if(choiceid===compchoice)
       {
     drawgame();
       }
       else
       {
        let userwin= true;
        if(choiceid==="rock")
        {
            //scissors, paper
             userwin=compchoice===paper? false:true;
        }
        else if(choiceid==="paper")
        {
            //rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            //rock, paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,choiceid,compchoice);
       }
    };
    const gencompchoice=()=>
    {   let options=["rock","paper","scissors"];
        //to generate random function math.random()->it genrates any random value between 0 and 1
       const randomidx=Math.floor( Math.random()*3);
        return options[randomidx];
    };
    const drawgame=()=>
    {
        console.log("game was a draw");
        msg.innerText="game was draw";
        msg.style.backgroundColor="green";
    }
    const showwinner=(userwin,choiceid,compchoice)=>
    {
     if(userwin)
     {  userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You win! Your ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor="red";}
    else
    {  compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose!");
    msg.innerText=`You lose! Your ${choiceid} beaten by ${compchoice}`;
    msg.style.backgroundColor="blue";}
    }