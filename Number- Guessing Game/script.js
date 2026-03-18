let computer = Math.floor(Math.random()*10)+1;
function check(){
let user = document.getElementById("guess").value;

if(user == computer){
    document.getElementById("result").innerHTML = "correct";
}else if(user > computer){
    document.getElementById("result").innerHTML = "Too High";
}else{
    document.getElementById("result").innerHTML = "Too Low";
}
}
