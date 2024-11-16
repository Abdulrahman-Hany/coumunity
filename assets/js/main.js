document.addEventListener("DOMContentLoaded", () => {
// Toggle dropdown for channel description container
document.querySelectorAll(".channel-content").forEach((content) => {
  const descriptionContainer = content.querySelector(
    ".channel-description-container"
  );
  const allContainer = content.querySelector(".all-container");

  descriptionContainer.addEventListener("click", () => {
    allContainer.classList.toggle("show-dropdown");
  });
});
/* =========================================================================*/

// Set active class for menu items
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
/* =========================================================================*/
//Auto-scrolling with button visibility toggle
const scrollDownButton = document.querySelector(".scroll-downe");
const messagesContainer = document.querySelector(".shseat-container");

scrollDownButton.addEventListener("click", () => {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

messagesContainer.addEventListener("scroll", () => {
  if (
    messagesContainer.scrollHeight -
      messagesContainer.scrollTop -
      messagesContainer.clientHeight <=
    40
  ) {
    scrollDownButton.style.display = "none";
  } else {
    scrollDownButton.style.display = "inline-block";
  }
});



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
const cryptoRecommendationsmenu = document.querySelector(
  ".crypto-recommendations"
);


cryptoRecommendationsmenu.addEventListener("click", ()=>{
  recommendationsContainer.classList.toggle("active");
})
messagesitemMnue.addEventListener("click", () => {
  recommendationsContainer.classList.toggle("active");
});
recommendationsIcon.addEventListener("click", () => {
  recommendationsContainer.classList.remove("active");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});

const messageBoxNotifation = document.querySelector(
  ".message-box.nav-notifation"
);
const messageBoxMassege = document.querySelector(".message-box.nav-massege");
const messagesContainers = document.querySelector(
  ".messages-container.massege"
);
const archiveBox = document.querySelector(".archive-box");
const messagescontainerVip = document.querySelector(".messages-container.vip");
const messageBoxPinned = document.querySelector(".message-box.pinned-messag");

const navNotifation = document.querySelector("#nav-notifation");
const navMassege = document.querySelector("#nav-massege");
const mumberVip = document.querySelector("#mumber-vip");
const mumberPinned = document.querySelector("#pinned-messages");

navNotifation.addEventListener("click", () => {
  messageBoxNotifation.classList.add("active");
  messagescontainerVip.classList.remove("active");
  messageBoxMassege.style.display = "none";
  messagesContainers.style.display = "flex";
  archiveBox.style.display = "none";
});
navMassege.addEventListener("click", () => {
  messageBoxNotifation.classList.remove("active");
  archiveBox.style.display = "flex";
  messageBoxMassege.style.display = "flex";
  messagescontainerVip.classList.remove("active");
  messagesContainers.style.display = "flex";
});
mumberPinned.addEventListener("click", () => {
  messageBoxPinned.classList.add("active");
  messageBoxMassege.style.display = "none";
  messagesContainers.style.display = "flex";
  archiveBox.style.display = "none";
  messagescontainerVip.classList.remove("active");
});
mumberVip.addEventListener("click", () => {
  messagescontainerVip.classList.add("active");
  messageBoxNotifation.classList.remove("active");
  archiveBox.style.display = "none";
  messageBoxMassege.style.display = "none";
  messagesContainers.style.display = "none";
});

// الحصول على جميع عناصر setting-item و checkbox
const settingItems = document.querySelectorAll(".setting-item");
const checkboxes = document.querySelectorAll(".checkbox");

settingItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    checkboxes.forEach((cb) => cb.classList.remove("checkbox-active"));
    checkboxes[index].classList.add("checkbox-active");
  });
});

const messageItems = document.querySelectorAll(".message-item");
const notificationsSettings = document.querySelector(".notification-settings");
messageItems.forEach((item) => {
  item.addEventListener("contextmenu", (e) => {
    e.preventDefault(); 
    notificationsSettings.style.display = "block"; 
  });
});

document.addEventListener("click", (e) => {
  if (!notificationsSettings.contains(e.target) && !e.target.classList.contains("message-item")) {
    notificationsSettings.style.display = "none"; 
  }
});


/* ================================================================================= */
 const sliderMenuButton = document.querySelector('.slider-mnue');
 const sliderChannels = document.querySelector('.slider-channels');
 const sidebar = document.querySelector('.sidebar');
 const mnueSliderChannels = document.querySelector('.mnue-slider-channels');
 const mnueSliderChannelLeft = document.querySelector('.mnue-slider-channels-slidbar-left ');
 const mnueSvg = document.querySelector('.mnue-svg');
 const slidbarLeft = document.querySelector('.slidbar-left');

 sliderMenuButton.addEventListener('click', (e) => {
     e.stopPropagation(); 
     sliderChannels.classList.toggle('active');
     sidebar.classList.toggle('active');
 });

 mnueSliderChannels.addEventListener('click', (e) => {
     e.stopPropagation();
     sidebar.classList.remove('active');
     sliderChannels.classList.remove('active');
 });

 mnueSvg.addEventListener('click', (e) => {
     e.stopPropagation(); 
     slidbarLeft.classList.add('active');
 });
 mnueSliderChannelLeft.addEventListener("click", () => {
     slidbarLeft.classList.remove('active');
 })
 document.addEventListener('click', (e) => {
     if (
         !sliderChannels.contains(e.target) &&
         !sidebar.contains(e.target) &&
         !sliderMenuButton.contains(e.target) &&
         !mnueSvg.contains(e.target) &&
         !slidbarLeft.contains(e.target)
     ) {
         slidbarLeft.classList.remove('active');
         sliderChannels.classList.remove('active');
         sidebar.classList.remove('active');
     }
 });


const userAvatars = document.querySelectorAll(".user-avatar");
const actionButtonBlock = document.querySelector(".action-button.block");
const actionButtonDiteals = document.querySelector(".action-button.diteals");
const modalContainer = document.querySelector(".modal-container");
const ditealsItemblock = document.querySelector(".diteals-item.block");
const cancelButtonModal = document.querySelector(".cancel-button-modal");
const profileo = document.querySelector(".profileo");
const bluePagess = document.querySelector(".bluer-profile");
const ditealsContainer = document.querySelector(".diteals-container");

if (userAvatars) {
    userAvatars.forEach(userAvatar => {
        userAvatar.addEventListener('click', (event) => {
            event.stopPropagation(); 
            profileo.classList.add("active");
            bluePagess.classList.add("active");
        });
    });
}

if (profileo && bluePagess) {
    document.addEventListener('click', (event) => {
        if (!profileo.contains(event.target)) {
            profileo.classList.remove("active");
            bluePagess.classList.remove("active");
        }
    });
}

if (actionButtonDiteals && ditealsContainer) {
    actionButtonDiteals.addEventListener("click", () => {
        ditealsContainer.classList.toggle("active");
    });
}

if (actionButtonBlock && modalContainer && bluePagess) {
    actionButtonBlock.addEventListener("click", () => {
        bluePagess.classList.add("active");
        modalContainer.classList.add("active");
    });
}

if (ditealsItemblock && bluePagess && modalContainer) {
    ditealsItemblock.addEventListener("click", () => {
        bluePagess.classList.add("active");
        modalContainer.classList.add("active");
    });
}

if (cancelButtonModal && bluePagess && modalContainer) {
    cancelButtonModal.addEventListener("click", () => {
        bluePagess.classList.remove("active");
        modalContainer.classList.remove("active");
    });
}


const navTabs = document.querySelectorAll(".nav-tab-friends");
const messageslistFriends = document.querySelector(".messages-list-friends");
const messageslistFriendsRequest = document.querySelector(".messages-list-friends.request");
const messageslistFriendsAdmin = document.querySelector(".messages-list-friends.admin");

if (navTabs.length > 0) {
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(innerTab => innerTab.classList.remove("active"));
      tab.classList.add("active");

      if (tab.classList.contains("friends-tab")) {
        messageslistFriends.style.display = "block";
        messageslistFriendsRequest.style.display = "none";
        messageslistFriendsAdmin.style.display = "none";
      } else if (tab.classList.contains("request-tab")) {
        messageslistFriends.style.display = "none";
        messageslistFriendsRequest.style.display = "block";
        messageslistFriendsAdmin.style.display = "none";
      } else if (tab.classList.contains("admin-tab")) {
        messageslistFriends.style.display = "none";
        messageslistFriendsRequest.style.display = "none";
        messageslistFriendsAdmin.style.display = "block";
      }
    });
  });
}

const friendGroup = document.querySelector(".friend-group");
const channelContainer = document.querySelector(".channel-container");
const FiveMillion = document.querySelector(".home-page.FiveMillion");
const bluerBacground = document.querySelector(".bluer-bacground");
const bluerBacgroundfiv = document.querySelector(".bluer-bacground.fiv");
const bluerBacgroundGroup = document.querySelector(".bluer-bacground.group");
const messagesWrapper = document.querySelector(".messages-wrapper");
const chatContainerChatFriend = document.querySelector(".chat-container-chat-friend");

const bluerbacground = document.querySelector("#talk-the-user .bluer-bacground");
const messagesfriendsAdmin = document.querySelector(".messages-container-friends.admin");
const messagesfriends = document.querySelector(".messages-container-friends");
const talkTheUser = document.querySelector("#talk-the-user");

if (friendGroup) {
  friendGroup.addEventListener("click", () => {
    if (channelContainer) channelContainer.style.display = "none";
    if (bluerBacground) bluerBacground.style.display = "none";
    if (messagesWrapper) messagesWrapper.style.display = "none";
    if (chatContainerChatFriend) chatContainerChatFriend.style.display = "block";
    if (bluerBacgroundGroup) bluerBacgroundGroup.classList.add("active");
    if (messagesfriends) messagesfriends.style.display = "block";
    if (messagesfriendsAdmin) messagesfriendsAdmin.classList.remove("active");
  });
}

if (FiveMillion) {
  FiveMillion.addEventListener("click", () => {
    if (channelContainer) channelContainer.style.display = "block";
    if (chatContainerChatFriend) chatContainerChatFriend.style.display = "none";
    if (bluerbacground) bluerbacground.style.display = "none";
    if (bluerBacground) bluerBacground.style.display = "block";
    if (messagesWrapper) messagesWrapper.style.display = "block";
    if (bluerBacgroundGroup) bluerBacgroundGroup.classList.remove("active");
  });
}

if (talkTheUser) {
  talkTheUser.addEventListener("click", () => {
    if (bluerbacground) bluerbacground.style.display = "block";
    if (bluerBacground) bluerBacground.style.display = "none";
    if (messagesfriendsAdmin) messagesfriendsAdmin.classList.add("active");
    if (channelContainer) channelContainer.style.display = "none";
    if (messagesfriends) messagesfriends.style.display = "none";
  });
}

/*=============>> Send Notification <<===================*/
const Sendnotification = document.querySelector(".btn-Add-new-course.notification");
const notificationContainerSend = document.querySelector(".notification-container-send");
const iconFrameSend = document.querySelector(".icon-frame-send");
const bluePage = document.querySelector(".bluer");

if (Sendnotification) {
  Sendnotification.addEventListener("click", () => {
    if (bluePage) bluePage.classList.add("active");
    if (notificationContainerSend) notificationContainerSend.classList.add("active");
  });
}

if (iconFrameSend) {
  iconFrameSend.addEventListener("click", () => {
    if (notificationContainerSend) notificationContainerSend.classList.remove("active");
    if (bluePage) bluePage.classList.remove("active");
  });
}

const settingLabelEdite = document.querySelector(".setting-label.edite");
const settingLabelReblay = document.querySelector(".setting-label.reblay");
const reblayMassage = document.querySelector(".reblay-massage");
const closeReblay = document.querySelector(".close-reblay");

if (settingLabelEdite && reblayMassage) {
  settingLabelEdite.addEventListener("click", () => {
    reblayMassage.style.display = 'flex';
  });
}

if (closeReblay && reblayMassage) {
  closeReblay.addEventListener("click", () => {
    reblayMassage.style.display = 'none';
  });
}
});