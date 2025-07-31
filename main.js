// Scroll-based Navigation Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Email dropdown
const emailLink = document.getElementById('email-nav-link');
const emailContainer = emailLink.closest('.email-container');
const navMenu = document.querySelector('.nav-menu');
const emailIcon = emailLink.querySelector('.email-icon');
const emailText = emailLink.querySelector('.email-text');

let isEmailExpanded = false;
let isSelecting = false;

// Handle clicks on the email icon only
emailIcon.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  console.log('Icon clicked, current state:', isEmailExpanded); // Debug log
  
  if (!isEmailExpanded) {
    // Expand the email
    emailContainer.classList.add('expanded');
    navMenu.classList.add('email-expanded');
    isEmailExpanded = true;
  } else {
    // Collapse the email
    emailContainer.classList.remove('expanded');
    navMenu.classList.remove('email-expanded');
    isEmailExpanded = false;
  }
});

// Handle text selection events
emailText.addEventListener('mousedown', (e) => {
  e.stopPropagation();
  isSelecting = true;
  // Don't prevent default here - we want text selection to work
});

emailText.addEventListener('mousemove', (e) => {
  if (isSelecting) {
    e.stopPropagation();
  }
});

emailText.addEventListener('mouseup', (e) => {
  e.stopPropagation();
  isSelecting = false;
});

emailText.addEventListener('click', (e) => {
  e.stopPropagation();
  // Only prevent default if we're not selecting text
  const selection = window.getSelection();
  if (selection.toString().length === 0) {
    e.preventDefault();
  }
});

// Prevent the main link from interfering with text selection
emailLink.addEventListener('mousedown', (e) => {
  // If clicking on the text, don't prevent default
  if (e.target === emailText) {
    e.stopPropagation();
    return;
  }
  e.preventDefault();
  e.stopPropagation();
});

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

// Disable drag on the link to prevent interference
emailLink.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

// Close email when clicking elsewhere
document.addEventListener('click', (e) => {
  if (!emailContainer.contains(e.target) && isEmailExpanded) {
    emailContainer.classList.remove('expanded');
    navMenu.classList.remove('email-expanded');
    isEmailExpanded = false;
  }
});

//End Email Dropdown

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
       $(this).children(".plusminus").text('-');
     } else {
       $(this).next(".accordion_body").slideDown(300);
       $(this).children(".plusminus").text('-');
     }
   });
 });