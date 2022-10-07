var slider_img=document.querySelector(".slider_img")
var images=["img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"]
var i = 0;


function previous (){
    if(i<=0)i=images.length;
    i--;
    return setImg();
}
function next(){
    if(i>=images.length-1) i=-1;
   i++;
    return setImg();
}
function setImg(){
return slider_img.setAttribute('src','images/'+images[i]);
}