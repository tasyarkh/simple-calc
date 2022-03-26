const themeToggleBtn = document.querySelector('.theme-toggler');
const calc = document.querySelector('.container');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calc.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}