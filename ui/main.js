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