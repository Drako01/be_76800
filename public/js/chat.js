const socket = io();
let username = null;

Swal.fire({
    title: "¡Bienvenido!",
    text: "Ingresa tu Username para comenzar a chatear",
    input: 'text',
    inputPlaceholder: 'Ingrese aqui su nombre...',
    confirmButtonText: 'Ingresar',
    allowOutsideClick: false,
    inputValidator: (value) => {
        if (!value) return 'Debes ingrear tu Username'
    }
}).then(result => {username = result.value});

const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const disconnectBtn = document.getElementById('disconnectBtn');



chatForm.addEventListener('submit', e => {
    e.preventDefault();

    if(messageInput.value.trim()){
        socket.emit('chat:message', {
            user: username,
            message: messageInput.value
        });
        messageInput.value = '';
    }
});

socket.on('chat:message', data => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${data.user}: </strong> ${data.message}`;
    messages.appendChild(li),
    messages.scrollTop = messages.scrollHeight;
});

disconnectBtn.addEventListener('click', () => {
    socket.disconnect();
    Swal.fire({
        icon: 'info',
        title: 'Desconectado',
        text: 'Te has desconectado del Chat Exitosamente.!!'
    })
});