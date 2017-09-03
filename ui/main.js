console.log('Loaded!');
//Change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML= "New Code";

//Move the image

var moveImg= document.getElementById('image');
moveImg.onclick= function()
{
    moveImg.style.marginLeft= '100px';
};