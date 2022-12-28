function clearScreen() {
    document.getElementById("result").value = "";
    }
       
function display(value1) {
    document.getElementById("result").value += value1;
    return value1;
    }
      
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
       