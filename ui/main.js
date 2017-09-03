console.log('Loaded!');
//Change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML= "New Code";

//Move the image

var moveImg= document.getElementById('image');
var marginLeft = 0;

function moveRight()
{
    marginLeft=marginLeft+1;
    moveImg.style.marginLeft=marginLeft+'px';
}
moveImg.onclick= function()
{
    var interval= setInterval(moveRight,50);
};