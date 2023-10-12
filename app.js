var result = document.getElementById("result")

function display(text){
    result.value += text;
}
function calulation(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}
function clr(){
    result.value = " ";
}
function cleartwo(){
    result.value = result.value.slice(0,-1);
}