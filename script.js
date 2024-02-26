var state = [1,0,1,1,0,0,0,1,1];
const winnerMsgDiv = document.getElementById('winnerMsgDiv');


// var count = 1;
var flag = true;
document.getElementById("gameArea").addEventListener('click', (e)=>{
    // if(count%2==1)
    //     e.target.innerText = "X";  
    // else
    //     e.target.innerText = "O"; 
    // ++count;
    var id = e.target.id;
    console.log(id);
    if(state[id] == 1 || state[id] == 0){
        if(flag){
            e.target.innerText = "X"; 
            state[id]="X";
            flag = !flag; 
        }
        else{
            e.target.innerText = "O"; 
            state[id]="O"; 
            flag = !flag;
        }
        checkWinner(!flag);
    }
    // else
    // {
    //     alert("Not allowed");
    // }
    
    console.log(state);
});


function checkWinner(signState)
{
    if(state[0] == state[1] && state[0] == state[2]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame , 2000);

        }
        else
        {
             winnerMsgDiv.innerText = "Winner O";
             document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
            setTimeout(resetGame , 2000);
            

        }
        
        
        setDisabled();
    }
    else if(state[3] == state[4] && state[3] == state[5]){
        if(signState)
        {
           winnerMsgDiv.innerText = "Winner X";
           document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
           setTimeout(resetGame,2000);
        }
        else
        {
             winnerMsgDiv.innerText = "Winner O";
             document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
             setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[6] == state[7] && state[6] == state[8]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
            winnerMsgDiv.innerText = "Winner O";
            document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[0] == state[3] && state[0] == state[6]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
             winnerMsgDiv.innerText = "Winner O";
             document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
             setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[1] == state[4] && state[1] == state[7]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
             winnerMsgDiv.innerText = "Winner O";
             document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
             setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[2] == state[5] && state[2] == state[8]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
            winnerMsgDiv.innerText = "Winner O";
            document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[0] == state[4] && state[0] == state[8]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
            winnerMsgDiv.innerText = "Winner O";
            document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else if(state[2] == state[4] && state[2] == state[6]){
        if(signState)
        {
            winnerMsgDiv.innerText = "Winner X";
            document.querySelector("#X-WinCount span").innerHTML=+document.querySelector("#X-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        else
        {
            winnerMsgDiv.innerText = "Winner O";
            document.querySelector("#O-WinCount span").innerHTML=+document.querySelector("#O-WinCount span").innerHTML+1;
            setTimeout(resetGame,2000);
        }
        
        setDisabled();
    }
    else{
        var count =0;
        for (x in state)//0
        {
            // console.log(x);
            if(state[x] === 1 || state[x] === 0)
            {
                count+=1;
            }
        }
        if(count == 0)
            winnerMsgDiv.innerText = "Draw !!";
    }
    
}


function setDisabled()
{
    for (x in state)//0
    {
        // console.log(x);
        if(state[x] === 1 || state[x] === 0)
        {
            state[x] = null;
        }
    }
    // for (x of state)
    // {
    //     console.log(x);
    // }
}


function restartGame()
{
    location.reload();
}

function resetGame()
{
    state = [1,0,1,1,0,0,0,1,1];
    winnerMsgDiv.innerText = "";

    for (x=0; x<9 ; x++)
    {
        document.getElementById(x).innerHTML = "";
    }

}


// function tracker()
// {
//    if(document.getElementById("player1").value!=""&&document.getElementById("player2").value!="")
//     {

       
//             document.getElementById("X-WinCount").innerHTML=document.getElementById("player1").value;
//             document.getElementById("O-WinCount").innerHTML=document.getElementById("player2").value; 
//         }

    
//     else
//         {
//             alert("Enter correct entries");
//         }
        

// }



