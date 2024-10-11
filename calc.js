const input = document.getElementById("input");

function display(dis){
    input.value +=  dis;
}

function cleardisplay() {
    input.value = "";
}

function result() {
    input.value = eval(input.value);
}
