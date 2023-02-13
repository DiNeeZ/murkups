(function () {
  const path = window.location.pathname;

  if (path === "/services.html") {
    const startSection = document.querySelector(".start");
    const qnaImgSet = document.querySelector(".qna picture").children;

    startSection.classList.add("secondary");

    [...qnaImgSet].forEach((element) => {
      if (element.tagName === "IMG") {
        element.src = "./img/qna-2.jpg";
      } else {
        element.srcset = "./img/qna-2.jpg";
      }
    });
  }
})();
