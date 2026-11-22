class Registration {
    constructor(email, password, rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    printConsole() {
        console.log(
            `Новый пользователь:\n` +
            `Email: ${this.email}\n` +
            `Пароль: ${this.password}\n` +
            `Запомнить: ${this.rememberMe ? 'Да' : 'Нет'}`
        );
    }
}

const form = document.querySelector('.login__form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'chat.html';
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const rememberMe = form.elements.remember_me.checked;
    const data = new Registration(email, password, rememberMe);
    data.printConsole()

})