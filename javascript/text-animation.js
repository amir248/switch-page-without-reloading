function typeText() {
    const text = document.getElementById('animated-text');
    const newText = text.getAttribute('data-text');
    text.textContent = '';
    text.style.width = '0';
    let i = 0;
    function type() {
        if (i < newText.length) {
            text.textContent += newText.charAt(i);
            i++;
            setTimeout(type, 100); // Скорость печати (в миллисекундах)
        } else {
            setTimeout(eraseText, 2000); // Задержка перед стиранием текста
        }
    }
    function eraseText() {
        if (i > 0) {
            text.textContent = text.textContent.slice(0, -1);
            i--;
            setTimeout(eraseText, 100); // Скорость стирания (в миллисекундах)
        } else {
            setTimeout(type, 1000); // Задержка перед началом нового цикла печати
        }
    }
    type();
}
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('animated-text');
    text.setAttribute('data-text', text.textContent);
    typeText();
});
