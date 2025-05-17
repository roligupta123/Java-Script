// let button = document.querySelector("#buuton");

// button.onclick =() =>{
//     console.log("Good bye everyone...");
// }

let modeBtn = document.querySelector("#button");
let curMode = "light";

modeBtn.addEventListener("click",()=>{
    if(curMode === "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";    }
    else{
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "pink";
    }
    console.log(curMode);
})

