const notificationItem = document.querySelector(".notifications-popup-cont");
const notificationMnue = document.querySelector(".notification-mnue");
const notificationClose = document.querySelector(".notification-icon-popup");
const notificationContainer = document.querySelector(
  ".notifications-container-popup"
);

notificationItem.addEventListener("click", () => {
  notificationContainer.classList.toggle("active");
});
notificationMnue.addEventListener("click", () => {
  notificationContainer.classList.toggle("active");
});
notificationClose.addEventListener("click", () => {
  notificationContainer.classList.remove("active");
});

const messagesitemMnue = document.querySelector("a .messages-item");
const recommendationsIcon = document.querySelector(
  ".header-content-recommendations"
);
const recommendationsContainer = document.querySelector(
  ".crypto-recommendations-recommendations"
);

messagesitemMnue.addEventListener("click", () => {
  recommendationsContainer.classList.toggle("active");
});
recommendationsIcon.addEventListener("click", () => {
  recommendationsContainer.classList.remove("active");
});

const actionbuttonmenu = document.querySelector(".action-button.menu");
const settingsContentMenu = document.querySelector(".settings-content.menu");

actionbuttonmenu.addEventListener("click", () => {
  settingsContentMenu.classList.toggle("active");
});

const navItemSettings = document.querySelectorAll(".nav-item-settinges");
const navItemSettingsSafety = document.querySelector(
  ".nav-item-settinges.safety"
);
const navItemSettingsdata = document.querySelector(
  ".nav-item-settinges.data"
);
const navItemSettingsPreferences = document.querySelector(
  ".nav-item-settinges.Preferences"
);
const navItemSettingsPrivacy = document.querySelector(
  ".nav-item-settinges.Privacy"
);
const formSetinges = document.querySelector(".form-setinges");
const formSetingesSafety = document.querySelector(".form-setinges.safety");
const formSetingesPreferences = document.querySelector(".form-setinges.Preferences");
const formSetingesPrivacy = document.querySelector(".form-setinges.Privacy");

navItemSettings.forEach((item) => {
  item.addEventListener("click", () => {
    navItemSettings.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

navItemSettingsSafety.addEventListener("click", () => {
    formSetingesPrivacy.style.display = "none";
  formSetinges.style.display = "none";
  formSetingesSafety.style.display = "flex";
  formSetingesPreferences.style.display = "none";
});
navItemSettingsdata.addEventListener("click", () => {
    formSetingesPrivacy.style.display = "none";
    formSetinges.style.display = "block";
    formSetingesSafety.style.display = "none";
    formSetingesPreferences.style.display = "none";

});
navItemSettingsPreferences.addEventListener("click", () => {
    formSetingesPrivacy.style.display = "none";
    formSetingesPreferences.style.display = "flex";
    formSetingesSafety.style.display = "none";
    formSetinges.style.display = "none";
});
navItemSettingsPrivacy.addEventListener("click", () => {

    formSetingesPrivacy.style.display = "flex";
    formSetingesPreferences.style.display = "none";
    formSetingesSafety.style.display = "none";
    formSetinges.style.display = "none";
});
