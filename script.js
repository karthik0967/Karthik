var myVar;
var wel;
const typed = new Typed(".auto-input,auto1", {
  strings: ["Hello! I'm Karthik"],
  startDelay: 4000,
  typeSpeed: 50,
});

function myFunction() {
  //document.body.style.backgroundColor = "#03001C";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("loader").style.display = "block";
  myVar = setTimeout(showwelcm, 1500);

  //document.body.style.backgroundColor = "#FAF8F1";
}
function showwelcm() {
  // document.body.style.backgroundColor = "#03001C";
  document.getElementById("loader").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  wel = setTimeout(showPage, 1500);
}

function showPage() {
  //document.body.style.backgroundColor = "#000000";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
