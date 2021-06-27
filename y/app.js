// get number //
function number (num){
    var result = document.getElementById("input");  
    result.value += num;
}


// get result //


function result(){
  var result = document.getElementById("input");
  result.value = eval(result.value)
}

// clearResult //

function clearResult(){
    var result = document.getElementById("input");
    result.value = "";
  } 

// get deletechar //

function deleteChar(){
    var number = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1); 
    number.value = remove ;
  } 
// remove last character from a strings ///


