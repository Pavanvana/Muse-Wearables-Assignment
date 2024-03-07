document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var currentSection = "";
    var sections = document.querySelectorAll(".section");
    var scrollPosition = window.pageYOffset;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActive(currentSection);
  });

  function setActive(currentSection) {
    var links = document.querySelectorAll(".navbar a");

    links.forEach(function (link) {
      link.classList.remove("active");
      if (link.classList.contains(currentSection)) {
        link.classList.add("active");
      }
    });
  }
});

let everestTimeout;

window.addEventListener("scroll", function () {
  const hiddenElement = document.getElementById("hiddenElement");
  const everestTitleElement = document.getElementById("everestTitle");
  const videoPlayerElement = this.document.getElementById("videoPlayer");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const contentTop = hiddenElement.getBoundingClientRect().top;

  const startOpacityDecrease = windowHeight / 10;
  const hidePosition = windowHeight / 5;

  let opacity =
    1 -
    (scrollPosition - startOpacityDecrease) /
      (hidePosition - startOpacityDecrease);
  opacity = Math.min(Math.max(opacity, 0), 1);

  hiddenElement.style.opacity = opacity;

  if (scrollPosition > hidePosition + contentTop) {
    hiddenElement.classList.add("hidden");
  } else {
    hiddenElement.classList.remove("hidden");
  }

  clearTimeout(everestTimeout);

  if (scrollPosition > windowHeight / 2) {
    everestTimeout = setTimeout(() => {
      everestTitleElement.style.display = "block";
      videoPlayerElement.classList.remove("hidden");
      videoPlayerElement.classList.add("video-container");
    }, 2000);
  } else {
    everestTitleElement.style.display = "none";
    videoPlayerElement.classList.add("hidden");
    clearTimeout(everestTimeout);
  }
});
