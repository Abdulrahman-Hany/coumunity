
let currentMessageActions = null;

// الدالة التي يتم استدعاؤها عند إضافة رد فعل (إيموجي)
function addReaction(emoji) {
  if (currentMessageActions) {
    let emojiCounter = currentMessageActions.querySelector(`[data-emoji="${emoji}"]`);
    if (emojiCounter) {
      emojiCounter.textContent = parseInt(emojiCounter.textContent || 0) + 1;
    } else {
      const newEmoji = document.createElement("span");
      newEmoji.setAttribute("data-emoji", emoji);
      newEmoji.textContent = "1";
      currentMessageActions.appendChild(newEmoji);
    }
  }
}

function toggleEmojiPopup(event) {
  currentMessageActions = event.target.closest('.message-actions');
  const messageItem = event.target.closest('.message-item');
  document.addEventListener('click', function hidePopup(event) {
    if (!popup.contains(event.target) && !event.target.closest('.plus-icon')) {
      popup.remove();
      document.removeEventListener('click', hidePopup);
    }
  });

  if (!messageItem) return;

  let popup = messageItem.querySelector('.reaction-container');

  if (!popup) {
    popup = document.createElement('div');
    popup.classList.add('reaction-container');
       popup.innerHTML = `
   <div class="emoji" onclick="addReaction('🔥')">🔥</div>
   <div class="emoji" onclick="addReaction('❤')">❤</div>
   <div class="emoji" onclick="addReaction('❤️')">❤️</div>
   <div class="emoji" onclick="addReaction('❤️‍🔥')">❤️‍🔥</div>
   <div class="emoji" onclick="addReaction('😊')">😊</div>
   <div class="emoji" onclick="addReaction('😍')">😍</div>
   <div class="emoji" onclick="addReaction('😘')">😘</div>
   <div class="emoji" onclick="addReaction('😌')">😌</div>
   <div class="emoji" onclick="addReaction('😂')">😂</div>
   <div class="emoji" onclick="addReaction('🤣')">🤣</div>
   <div class="emoji" onclick="addReaction('😋')">😋</div>
   <div class="emoji" onclick="addReaction('😜')">😜</div>
   <div class="emoji" onclick="addReaction('😎')">😎</div>
   <div class="emoji" onclick="addReaction('😔')">😔</div>
   <div class="emoji" onclick="addReaction('😢')">😢</div>
   <div class="emoji" onclick="addReaction('😲')">😲</div>
   <div class="emoji" onclick="addReaction('😱')">😱</div>
   <div class="emoji" onclick="addReaction('😰')">😰</div>
   <div class="emoji" onclick="addReaction('😓')">😓</div>
   <div class="emoji" onclick="addReaction('🤔')">🤔</div>
   <div class="emoji" onclick="addReaction('😴')">😴</div>
   <div class="emoji" onclick="addReaction('😅')">😅</div>
   <div class="emoji" onclick="addReaction('😆')">😆</div>
   <div class="emoji" onclick="addReaction('😁')">😁</div>
   <div class="emoji" onclick="addReaction('😠')">😠</div>
   <div class="emoji" onclick="addReaction('😤')">😤</div>
   <div class="emoji" onclick="addReaction('😇')">😇</div>
   <div class="emoji" onclick="addReaction('🤪')">🤪</div>
   <div class="emoji" onclick="addReaction('😏')">😏</div>
   <div class="emoji" onclick="addReaction('😷')">😷</div>
   <div class="emoji" onclick="addReaction('😎')">😎</div>
   <div class="emoji" onclick="addReaction('🤗')">🤗</div>
   <div class="emoji" onclick="addReaction('🤭')">🤭</div>
   <div class="emoji" onclick="addReaction('🤡')">🤡</div>
   <div class="emoji" onclick="addReaction('🥱')">🥱</div>
   <div class="emoji" onclick="addReaction('🤠')">🤠</div>
   <div class="emoji" onclick="addReaction('😇')">😇</div>
   <div class="emoji" onclick="addReaction('😛')">😛</div>
   <div class="emoji" onclick="addReaction('😜')">😜</div>
   <div class="emoji" onclick="addReaction('🤥')">🤥</div>
   <div class="emoji" onclick="addReaction('🤨')">🤨</div>
   <div class="emoji" onclick="addReaction('😐')">😐</div>
   <div class="emoji" onclick="addReaction('🤒')">🤒</div>
   <div class="emoji" onclick="addReaction('🤕')">🤕</div>
   <div class="emoji" onclick="addReaction('🥵')">🥵</div>
   <div class="emoji" onclick="addReaction('🥶')">🥶</div>
   <div class="emoji" onclick="addReaction('😈')">😈</div>
   <div class="emoji" onclick="addReaction('😉')">😉</div>
`;
// إضافة النافذة المنبثقة إلى العنصر .message-item
messageItem.appendChild(popup);
}

// التبديل بين حالة العرض (من 'none' إلى 'flex')
if (popup.style.display === 'flex') {
  popup.style.display = 'none'; // إخفاء النافذة إذا كانت معروضة
} else {
  popup.style.display = 'flex'; // عرض النافذة إذا كانت مخفية
}

// وضع النافذة المنبثقة بالقرب من الزر المضغوط داخل .message-item
const buttonRect = event.target.getBoundingClientRect();
const messageItemRect = messageItem.getBoundingClientRect();

popup.style.position = 'absolute';
popup.style.top = `${buttonRect.bottom - messageItemRect.top + window.scrollY + 10}px`;
}

// إضافة الحدث إلى كل زر plus-icon
const shareButtons = document.querySelectorAll('.plus-icon');
shareButtons.forEach(button => {
  button.addEventListener('click', toggleEmojiPopup);
});

function addReaction(emoji) {
  if (!currentMessageActions) return; // تأكد من وجود العنصر .message-actions الحالي

  let existingReaction = currentMessageActions.querySelector(`.action-button[data-emoji="${emoji}"]`);

  if (existingReaction) {
      // زيادة العداد إذا كان الإيموجي موجودًا بالفعل
      const counter = existingReaction.querySelector('span');
      counter.textContent = parseInt(counter.textContent) + 1;
  } else {
      // إضافة إيموجي جديد مع العداد
      const newReaction = document.createElement('button');
      newReaction.classList.add('action-button');
      newReaction.setAttribute('data-emoji', emoji);
      newReaction.setAttribute('aria-label', emoji);
      newReaction.innerHTML = `
          <span>1</span>
          <span class="action-icon">${emoji}</span>
      `;

      // إضافة الحدث لزيادة العداد عند النقر على الإيموجي
      newReaction.addEventListener('click', () => {
          const counter = newReaction.querySelector('span');
          counter.textContent = parseInt(counter.textContent) + 1;
      });

      currentMessageActions.appendChild(newReaction); // إضافة الإيموجي إلى .message-actions المستهدف
  }

  // إخفاء النافذة بعد إضافة الإيموجي
  const popup = document.querySelector('.reaction-container');
  if (popup) popup.remove();
}