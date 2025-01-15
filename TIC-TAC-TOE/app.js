let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");

let turn0 =true; //player x , player o

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    let turn0 =true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach( (box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){ //player O
          box.innerText="O";
          turn0=false;
        }
        else{
            //player X
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes =() =>{
   for(let box of boxes){
    box.disabled=true;
   }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner) =>{
   message.innerText=`Congratulations,Winner is "${winner}"`; 
   msgcontainer.classList.remove("hide");
   disableboxes();
};

const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                
                showwinner(pos1);
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


