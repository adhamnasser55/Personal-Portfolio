var themeBtn = document.getElementById("theme-toggle-button");
var html = document.documentElement;
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeBtn.addEventListener("click", function () {
  toggleTheme();
});
function toggleTheme() {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}


var navAnchors = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
  scrollspyMethdology();
});
function scrollspyMethdology() {
  var currentId = "";
  for (var i = 0; i < sections.length; i++) {
   
    var currentSection = sections[i];
    
    if (scrollY >= currentSection.offsetTop) {
      currentId = currentSection.getAttribute("id");

      
    }

  }
 
  navAnchors.forEach(function(anchor) {
    anchor.classList.toggle(
      "active",
      anchor.getAttribute("href") === `#${currentId}`,
    );
  });
}


var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");
var cardContainer = document.getElementById("testimonials-carousel");
var indicators = document.querySelectorAll(".carousel-indicator");
var card = document.querySelector(".testimonial-card").offsetWidth;

var totalCards = cardContainer.children.length;

console.log(card);

var currentIndex = 0;
nextBtn.addEventListener("click", function () {
  currentIndex++;
  console.log(currentIndex);
  if (currentIndex === totalCards - 2) {
    currentIndex = 0;
  }
  
  autoSlide();
});
prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalCards - 3;
  }
  
  autoSlide();
});

function autoSlide() {
  cardContainer.style.transform = `translateX(${currentIndex * card}px)`;
  updateUIndicators();
}

function updateUIndicators() {
  for (var i = 0; i < indicators.length; i++) {
    if (i === currentIndex) {
      indicators[i].classList.remove("bg-slate-400", "dark:bg-slate-600");
      indicators[i].classList.add("active", "scale-125", "bg-accent");
    } else {
      indicators[i].classList.remove("active", "scale-125", "bg-accent");
      indicators[i].classList.add("bg-slate-400", "dark:bg-slate-600");
    }
  }
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function (e) {
      
      currentIndex = parseInt(e.currentTarget.getAttribute("data-index"), 10);
      console.log(currentIndex);

      autoSlide();
    });
  }
}
autoSlide();


var filterBtns = document.querySelectorAll(".portfolio-filter");
var gridItems = document.querySelectorAll(".portfolio-item");
// change color
for (var i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function (e) {
    var filter = e.currentTarget.getAttribute("data-filter");
    for (var j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50",
      );
      filterBtns[j].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      
    }
    e.currentTarget.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
    e.currentTarget.classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "shadow-lg",
      "shadow-primary/50",
    );
   
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.transition = "opacity 0.3s, transform 0.3s";
      gridItems[i].style.transform = "scale(0.8)";
      gridItems[i].style.opacity = "0";
      
      setTimeout(function() {
         gridItems[i].style.display = "none";
      }, 400);

      var category = gridItems[i].getAttribute("data-category");
      if (filter == category || filter == "all") {
        setTimeout(function() {
          gridItems[i].style.display = "block";
          setTimeout(function() {
            gridItems[i].style.transition = "opacity 0.3s, transform 0.3s";
            gridItems[i].style.transform = "scale(1)";
            gridItems[i].style.opacity = "1";
          }, 100);
        }, 400);
      }
    }
  });
}


var scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener('scroll', function () {
 if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTop.style.display = "block";
 } else {
    scrollToTop.style.display = "none";
 }
});

scrollToTop.addEventListener('click', function () {
    window.scrollTo({
       top: 0, 
       behavior: "smooth" 
    });
});