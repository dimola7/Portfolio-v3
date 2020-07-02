document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));
let t1 = new TimelineLite();
let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(t1)
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
