function clearScreen(){
    document.getElementById("result").value = "";
}

function display(a){
    document.getElementById("result").value += a;
}

function calculate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}