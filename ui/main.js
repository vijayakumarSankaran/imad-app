//Counter code

var button=document.getElementById('counter');
button.onclick=function() {
    //Create the request object
    
    var request= new XMLHttpRequest();
    
    //Capture the request and store it varaiable
    
    request.onreadystatechange= function() {
        if(request.readyState===XMLHttpRequest.DONE) {
            //Take some action
            
            if(request.status===200) {
                var counter= request.responseText;
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //Not Done yet
    };
    
    // Make the request
    request.open('GET','http://vijayakumarsm3.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit names
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function() {
    //Make a request to the server and send the name
    
    //Capture the list of names and render it as a list
    var names= ['name1','name2','name3','name4','name5'];
    var list='';
    for(var i=0;i<names.length;i++) 
    {
           list+= '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML= list;
};