const sections = Array.from(document.querySelectorAll(".container div"));
const buttons = Array.from(document.querySelectorAll("button"));
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
let totalCount = 0;

// Adding data attribute to buttons
for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.setAttribute("data-id", `${index}`);
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const page = sections[index];
    const firstPage = sections[0];

    //Pages
    sections.forEach((page) => {
      if (
        page.classList.contains("visible") ||
        firstPage.classList.contains("mainPage")
      ) {
        page.classList.remove("visible");
        firstPage.classList.remove("mainPage");
      }
    });
    page.classList.add("visible");

    // Buttons
    buttons.forEach((Btn) => {
      if (Btn.classList.contains("active")) {
        Btn.classList.remove("active");
      }
    });
    btn.classList.add("active");
  });
});

rightBtn.addEventListener("click", () => {
  totalCount += 1;
  let translatepx = 120 * totalCount;
  buttons.forEach((btn) => {
    btn.style.transform = `translateX(-${translatepx}px)`;
  });
  if (totalCount >= 2) {
    rightBtn.style.display = "none";
  }
  if (totalCount < 2) {
    leftBtn.style.display = "inline";
  }
});

leftBtn.addEventListener("click", () => {
  totalCount -= 1;
  buttons.forEach((btn) => {
    let translatepx = 120 * totalCount;
    btn.style.transform = `translateX(-${translatepx}px)`;
  });
  if (totalCount < 2) {
    rightBtn.style.display = "inline";
  }
  if (totalCount === 0) {
    leftBtn.style.display = "none";
  }
});
