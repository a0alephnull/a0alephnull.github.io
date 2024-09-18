//CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.carousel-section');
  const prevButton = document.querySelector('.carousel-nav-left');
  const nextButton = document.querySelector('.carousel-nav-right');
  let currentIndex = 0;

  function showSection(index) {
      sections.forEach((section, i) => {
          if (i === index) {
              section.classList.add('active');
          } else {
              section.classList.remove('active');
          }
      });
  }

  function goToPrevious() {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
      showSection(currentIndex);
  }

  function goToNext() {
      currentIndex = (currentIndex + 1) % sections.length;
      showSection(currentIndex);
  }

  prevButton.addEventListener('click', goToPrevious);
  nextButton.addEventListener('click', goToNext);

  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
          goToPrevious();
      } else if (event.key === 'ArrowRight') {
          goToNext();
      }
  });

  // Initialize the first section as active
  showSection(currentIndex);
});

//EMAIL DROPDOWN
 const emailIcon = document.getElementById('email-icon');
 const emailBox = document.getElementById('email-box');
 
 let isEmailBoxVisible = false;
 
 emailIcon.addEventListener('click', () => {
   if (!isEmailBoxVisible) {
     emailBox.style.display = 'block';
     setTimeout(() => {
       emailBox.style.opacity = '1';
     }, 0);
   } else {
     emailBox.style.opacity = '0';
     setTimeout(() => {
       emailBox.style.display = 'none';
     }, 300); // Adjust the timing to match the transition duration (0.3s in this case)
   }
   isEmailBoxVisible = !isEmailBoxVisible;
 });
//END EMAIL DROPDOWN

// LIGHTBOX
 function openLightbox(imageUrl) {
  document.getElementById('lightbox-image').src = imageUrl;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
//END LIGHTBOX

//CURSOR

//END CURSOR


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  filterSelection("all")
  function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    console.log(c);
  }


function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
var myDropdown = document.getElementById("myDropdown");
if (myDropdown) {
  var btns = myDropdown.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}}

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  $(document).ready(function() {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function() {
      if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text('+');
      }
      if ($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text('+');
      } else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text('-');
      }
    });
  });