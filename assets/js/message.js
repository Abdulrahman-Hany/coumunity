document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.querySelector(".text-input");
    const sendMassages = document.querySelector(".send-massages");
    const chatBody = document.querySelector(".messages-wrapper");
    const fileInput = document.querySelector("#file-input");
    const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
    const fileCancelButton = fileUploadWrapper?.querySelector("#file-cancel");
    const scrollDownButton = document.querySelector("#scroll-down-button");
    const messagesContainer = document.querySelector(".messages-wrapper");

    // Initialize user message and file data
    const userData = {
        message: null,
        file: {
            data: null,
            mime_type: null,
        },
    };

    // Create message element with dynamic classes and return it
    const createMessageElement = (content, ...classes) => {
        const article = document.createElement("article");
        article.classList.add("message-item", ...classes);
        article.innerHTML = content; 
        return article;
    };

    // Function to get current time in HH:MM AM/PM format
    const getCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    };

    // Handle outgoing user messages
    const handleOutgoingMessage = (userMessage) => {
        const currentTime = getCurrentTime();
        const textMessage = document.createTextNode(userMessage);

        const messageContent = `
            <header class="message-header">
                <div class="message-meta">
                    <time class="message-time">${currentTime}</time>
                    <svg class="user-status" xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                        <path opacity="0.2" d="M1.5 0.5C1.5 0.223858 1.27614 0 1 0C0.723858 0 0.5 0.223858 0.5 0.5H1.5ZM0.5 0.5V15.5H1.5V0.5H0.5Z" fill="white"/>
                    </svg>
                    <span class="username">Five Million ❤🔥</span>
                </div>
                <img class="user-avatar" 
                     src="assets/images/logo-five-million.png" 
                     alt="Jack7's avatar" loading="lazy" />
            </header>
            ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}
        `;

        const outgoingMessageDiv = createMessageElement(messageContent, "message-item");
        const messageParagraph = document.createElement("p");
        messageParagraph.classList.add("message-content");
        messageParagraph.appendChild(textMessage);
        outgoingMessageDiv.appendChild(messageParagraph);
        chatBody?.appendChild(outgoingMessageDiv);

        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    // Handle click event for sending messages
    sendMassages?.addEventListener("click", () => {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            handleOutgoingMessage(userMessage);
            messageInput.value = "";
            fileUploadWrapper.classList.remove("file-uploaded");
            userData.file = {};
        }
    });

    // Handle Enter key press for sending messages
    messageInput?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const userMessage = messageInput.value.trim();
            if (userMessage) {
                handleOutgoingMessage(userMessage);
                messageInput.value = "";
                fileUploadWrapper.classList.remove("file-uploaded");
                userData.file = {};
            }
        }
    });

    // Handle scroll down button functionality
    scrollDownButton?.addEventListener("click", () => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });

    // Hide or show scroll down button based on scroll position
    messagesContainer?.addEventListener("scroll", () => {
        if (messagesContainer.scrollHeight - messagesContainer.scrollTop - messagesContainer.clientHeight <= 40) {
            scrollDownButton.style.display = 'none';
        } else {
            scrollDownButton.style.display = 'inline-block';
        }
    });

    // Handle file input change and preview the selected file
    fileInput?.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            fileInput.value = "";
            fileUploadWrapper.querySelector("img").src = e.target.result;
            fileUploadWrapper.classList.add("file-uploaded");
            const base64String = e.target.result.split(",")[1];

            // Store file data in userData
            userData.file = {
                data: base64String,
                mime_type: file.type,
            };
        };

        reader.readAsDataURL(file);
    });

    // Cancel file upload
    fileCancelButton?.addEventListener("click", () => {
        userData.file = {};
        fileUploadWrapper.classList.remove("file-uploaded");
    });

    // Initialize emoji picker and handle emoji selection
    const picker = new EmojiMart.Picker({
        theme: "light",
        skinTonePosition: "none",
        previewPosition: "none",
        onEmojiSelect: (emoji) => {
            const { selectionStart: start, selectionEnd: end } = messageInput;
            messageInput.setRangeText(emoji.native, start, end, "end");
            messageInput.focus();
        },
        onClickOutside: (e) => {
            if (e.target.id === "emoji-picker") {
                document.body.classList.toggle("show-emoji-picker");
            } else {
                document.body.classList.remove("show-emoji-picker");
            }
        },
    });
    chatBody?.appendChild(picker);
    document.querySelector("#attachment-file")?.addEventListener("click", () => fileInput.click());
});
