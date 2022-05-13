var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question Turn- " + player1_name;
document.getElementById("playeranswer").innerHTML="Answer Turn- " + player2_name;

function sendword(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log(word);
    firstChar=word.charAt(1);
    secondChar=word.charAt(word.length-1);
    indexNumber=Math.floor(word.length/2);
    thirdChar=word.charAt(indexNumber);
    firstword=word.replace(firstChar,"_");
    secondword=firstword.replace(secondChar,"_");
    thirdword=secondword.replace(thirdChar,"_")
    console.log(thirdword)
    questionword="<h4 id='word_display'> Q. "+thirdword+" </h4>";
    inputBox="<br> Answer: <input id='input_check_box' type='text' >";
    checkButton="<br> <br> <button onclick='check()' class='btn btn-info'> Check </button>";
    row=questionword+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}