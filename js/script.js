const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo");

// gsap for javascript animations
gsap.from(logo, { x: -100 });
gsap.from(".animation", { opacity: 0, duration: 1, y: -50, stagger: 0.2 });
// gsap.from(".work", {
//   scrollTrigger: ".work",
//   x: 1000,
//   duration: 1.5,
// });

let btn = $("#button");

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", (e) => {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

const tl = new TimelineLite();

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(tl)
  .addTo(controller);

const showRequiredCategory = (event) => {
  const getId = event.id;
  const links = document.querySelectorAll(".work-category button");
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }

  event.classList.add("active");
  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^="category-"]');
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }

  getCategory.classList.remove("hideCategory");
  getCategory.classList.add("showCategory");
};

document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));
