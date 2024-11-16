/* Login-moment-after-registration{BOBUO} */
const bluePage = document.querySelector(".bluer");
const btnOne = document.querySelector(".stats-icon-Welcome.one");
const btnTwo = document.querySelector(".stats-icon-Welcome.two");
const btnThree = document.querySelector(".stats-icon-Welcome.three");
const popupOne = document.querySelector(".community-container-Welcome.one");
const popupTwo = document.querySelector(".community-container-Welcome.two");
const popupThree = document.querySelector(".community-container-Welcome.three");
const popupJoinDiscussion = document.querySelector(
  ".community-container-Welcome.Join-discussion"
);

bluePage.classList.add("active");

popupOne.addEventListener("click", () => {
  popupOne.style.display = "none";
  popupTwo.style.display = "flex";
  bluePage.classList.add("active");

});

btnTwo.addEventListener("click", () => {
  popupTwo.style.display = "none";
  popupThree.style.display = "flex";
  bluePage.classList.add("active");
});

btnThree.addEventListener("click", () => {
  popupTwo.style.display = "none";
  popupThree.style.display = "none";
  bluePage.classList.remove("active");

  setTimeout(() => {
    bluePage.classList.add("active");
    popupJoinDiscussion.style.display = "flex";

    setTimeout(() => {
      popupJoinDiscussion.style.display = "none";
      bluePage.classList.remove("active");
    }, 5000);

    setTimeout(() => {
      document.addEventListener("click", (event) => {
        if (!popupJoinDiscussion.contains(event.target)) {
          popupJoinDiscussion.style.display = "none";
          bluePage.classList.remove("active");
        }
      });
    }, 0);
  }, 2000);
});