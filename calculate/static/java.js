function clearScreen() {
    document.getElementById("result").value = "";
    }
       
function display(value1) {
    document.getElementById("result").value += value1;
    return value1;
    }
      
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
//     }

function operators(){
    var a = [];
    var answer;
    
    if(document.getElementById("result").value.includes("+")){
    a = document.getElementById("result").value.split('+');
    return answer= parseFloat(a[0]) + parseFloat(a[1]);
    }
    
    else if(document.getElementById("result").value.includes("-")){
    a = document.getElementById("result").value.split('-');
    return answer= parseFloat(a[0]) - parseFloat(a[1]);
    }
    
    else if(document.getElementById("result").value.includes("/")){
    a = document.getElementById("result").value.split('/');
    return answer= parseFloat(a[0]) / parseFloat(a[1]);
    }
    
    else{
    a = document.getElementById("result").value.split('*');
    return answer= parseFloat(a[0]) * parseFloat(a[1]);
    }
}
    
function calculate(){	
var b = operators()
document.getElementById('result').value = b; 
}
       