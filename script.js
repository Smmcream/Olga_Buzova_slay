const quotes = [
    "Я не такая, я другая!",
    "Кто не рискует, тот не Бузова!",
    "Любите меня, пока я живая!",
    "Я не идеальна, но я настоящая!",
    "Все будет бузово!",
    "Я как вино - с возрастом только лучше!",
    "Не нравится - не ешь!",
    "Я не конфетка, чтобы всем нравиться!",
    "Живи, как хочешь ты, а не как ожидают от тебя!",
    "Я - это я, и мне нравится быть собой!",
    "Если тебе со мной плохо - иди туда, где тебе хорошо!",
    "Я не со всеми, я сама по себе!",
    "Лучше быть одной, чем с кем попало!",
    "Мое настроение - мое правило!",
    "Я не ищу легких путей - я создаю свои!"
];

document.getElementById('generateBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    
    // Анимация исчезновения
    quoteDisplay.style.opacity = 0;
    
    setTimeout(() => {
        quoteDisplay.textContent = quotes[randomIndex];
        // Анимация появления
        quoteDisplay.style.opacity = 1;
        quoteDisplay.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            quoteDisplay.style.transform = 'translateY(0)';
        }, 300);
    }, 300);
});