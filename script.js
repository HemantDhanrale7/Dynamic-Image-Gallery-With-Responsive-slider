//Collection of images
var myimages = document.getElementsByClassName("imgcls");
console.log(myimages);


//left arrow button
var leftarrow = document.getElementById("leftarrow");
console.log(leftarrow);


//Right arrow button
var rightarrow = document.getElementById("rightarrow");
console.log(rightarrow);



// get modal
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var modalimgclass = document.getElementsByClassName("mymodalclass");



for(var i=0; i<=myimages.length; i++){
    myimages[i].addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      })
 
      var myspan = document.getElementsByClassName("close")[1];
      myspan.onclick = function() { 
        modal.style.display = "none";
      }
    
}














// function myslider(n) {
//   runslide((slidenum = slidenum + n));
//   console.log("Slider clicked");
// }


// function runslide(n) {
//     let i;
//     var slides = document.getElementsByClassName("imgcls");
  
//     if (n > slides.length) {
//       slidenum = 1;
//     }
//     if (n < 1) {
//   
 