// Get the modal
var modal = document.getElementById("myModal")
modal.onclick = function() {
    if(this.style.display === 'block') {
       this.style.display = 'none' 
    }
};

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("id2");
var img3 = document.getElementById("id3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



function displayModal(src, desc) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = desc;
}

img2.onclick = function () {
    displayModal(this.src, this.alt);
}
img.onclick = function () {
    displayModal(this.src, this.alt);
}
img3.onclick = function () {
    displayModal(this.src, this.alt);
} 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


function submitForm(){
    
    let subject = document.getElementById("subject");

    localStorage["portrait"] = subject.value;


    alert("Thank you for voting!")
/*
    localStorage.setItem("firstname", "Smith");
    var name=localStorage.getItem("firstname");
*/

}