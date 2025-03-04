let slideIndex = 0; //setting default value of index to 0
showSlides(); //calling function

function showSlides() { //initializing function
  let i; 
  let slides = document.getElementsByClassName("imagery"); 
  for (i = 0; i < slides.length; i++) {   
    slides[i].style.display = "none";     
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2600);
}