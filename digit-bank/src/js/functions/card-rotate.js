import VanillaTilt from "vanilla-tilt";

(function () {
  const card = document.querySelector(".hero__right");

  VanillaTilt.init(card, {
    max: 25,
    speed: 10,
  });
})();
