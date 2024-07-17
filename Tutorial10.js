let boxes=document.querySelectorAll(".box");//accessing the elements by class name
let ResetBtn=document.querySelector("#Reset");
let messagecontainer=document.querySelector(".messagecontainer");
let para=document.querySelector("#message");
let NewBtn=document.querySelector("#newBtn");
let turnO=true;//the player O will start the game first
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//2D array
//setting the functionalities of the reset and the new button
let resetGame=()=>{
    turnO=true;//the player O will begin the game
    enabledBoxes();
    messagecontainer.classList.add("hide");//to hide this part once again
};
//when we either start a new game or restart the game in between
let enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";//they must be empty
    }
};
//After winning,we are disabling the remaining boxes
let disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//to check the winning condition and the winner
let showWinner=(winner)=>{
     message.innerText=`Congratulations!!!Winner is ${winner}`;//to display the winner name
     messagecontainer.classList.remove("hide");//to display the mesage container part
     disabledBoxes();//to stop any more game in that round
};
let checkWinner=()=>{
    for(let pattern of winningPattern){
        /*console.log(pattern);
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);*/
       // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!==""&&posval2!==""&&posval3!=="")//all the boxes be it row-wise or column-wise or diagonally must not be empty
            {
            if(posval1===posval2&&posval2===posval3){
                //console.log("Winner");
                console.log("Winner",posval1)
                showWinner(posval1);
            }
        }
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){//Player O
            box.innerText="O";
            turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();//to check the winning condition and the winner

        });
       
    });
//function call to trigger the occurance of reset and new buttons events
NewBtn.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);
