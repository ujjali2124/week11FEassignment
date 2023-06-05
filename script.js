
player1=[];
player2=[];
var turn = true;
function addTextInput(num,fieldId) {
    if (turn == true){
        document.getElementById(fieldId).innerHTML= "X";
        player1.push(num);
        let text = "PlayerX is Winner";
        checkWin(player1,text);
        turn = false;  
        document.getElementById("turn-heading").innerHTML= "It's O Turn";  
    }
    else{
        // var x = document.createElement("INPUT");
        // x.setAttribute("type", "text");
        // x.setAttribute("name", "textInput");
        // x.setAttribute("value", "O");
        // document.getElementById(fieldId).appendChild(x)
        document.getElementById(fieldId).innerHTML= "O";
        player2.push(num);
        let text = "PlayerO is Winner";
        checkWin(player2,text);
        turn = true; 
        document.getElementById("turn-heading").innerHTML = "It's X Turn"; 
    }
}
function checkWin(player,text) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]
    ]
    let checker = (arr, target) => target.every(v => arr.includes(v));

    for(let i=0 ;i<=7;i++){
       console.log(checker(player,winningCombinations[i])); 
       if(checker(player,winningCombinations[i]) === true){
        confirm(text);
        location.reload();
        }
    }
}