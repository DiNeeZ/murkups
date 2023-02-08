(function () {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar__link");

  navLinks.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });
})();
