//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //make a request to the counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in a correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}