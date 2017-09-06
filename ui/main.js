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
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://vijayakumarsm3.imad.hasura-app.io/submit-name=' + name ,true);
    request.send(null);
};

//Submit names

var submit=document.getElementById('submit_btn');
submit.onclick= function() {
    //Make a request to the server and send the name
    
    var request= new XMLHttpRequest();
    //Capture the list of names and render it as a list
    var names= request.responseText;
    ////convert STRING to oBJECT array(Reverse of JSoN)
    names= JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++) 
    {
           list+= '<li>' + names[i] + '</li>';
    }
   
    var ul = document.getElementById('namelist');
    ul.innerHTML= list;
};