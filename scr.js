
function rate(star) {
  // Get the parent div of the rating stars
  var ratingDiv = star.parentNode;
  // Get all the rating stars in this div
  var stars = ratingDiv.querySelectorAll('i');
  // Get the index of the clicked star
  var index = Array.prototype.indexOf.call(stars, star);
  
  // Loop through all stars and set their class based on the index
  for (var i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.remove('far');
      stars[i].classList.add('fas');
    } else {
      stars[i].classList.remove('fas');
      stars[i].classList.add('far');
    }
  }
}

