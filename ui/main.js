//Counter code

var button=document.getElementById('counter');
var counter= 0;
button.onClick=function() {
    //Make a request to the counter endpoint
    
    //Capture the request and store it varaiable
    
    //Render the variable in the correct span
    
    counter= counter+1;
    var span= document.getElementById('count');
    span.innerHtml=counter.toString();
};