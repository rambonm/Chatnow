function sendMessage() {
    const input = document.getElementById('messageInput');
    const chatBox = document.querySelector('.chat-box');

    if (input.value.trim() !== '') {
        const sentMessage = document.createElement('p');
        sentMessage.classList.add('sent');
        sentMessage.textContent = input.value.trim();
        chatBox.appendChild(sentMessage);
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
