const themeButton = document.getElementById("theme-toggle");
const langButton = document.getElementById("lang-toggle");

// Словарь переводов
const translations = {
    ru: {
        title: "Здравствуйте, я Артур",
        subtitle: "Обучаюсь в колледже на разработке ПО",
        about: "Обо мне",
        projects: "Projects", 
        langBtn: "EN"
    },
    en: {
        title: "Hello, I am Artur",
        subtitle: "I study software development at college",
        about: "About me",
        projects: "Projects",
        langBtn: "RU"
    }
};

// Функция обновления интерфейса (тема + язык)
function updateInterface() {
    const lang = localStorage.getItem('user-lang') || 'ru';
    const theme = localStorage.getItem('user-theme') || 'light';
    const t = translations[lang];

    // Логика ТЕМЫ
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeButton.textContent = "Light";
    } else {
        document.body.classList.remove('dark-mode');
        themeButton.textContent = "Dark";
    }

    // Логика ТЕКСТА (перевод)
    document.getElementById('main-title').textContent = t.title;
    document.getElementById('sub-title').textContent = t.subtitle;
    document.getElementById('nav-about').textContent = t.about;
    document.getElementById('nav-projects').textContent = t.projects;
    
    // Текст на кнопке переключения языка
    langButton.textContent = t.langBtn;
}

// Загрузка при старте
updateInterface();

// Клик по кнопке ТЕМЫ
themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('user-theme', isDark ? 'dark' : 'light');
    updateInterface();
});

// Клик по кнопке ЯЗЫКА
langButton.addEventListener('click', () => {
    const currentLang = localStorage.getItem('user-lang') || 'ru';
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('user-lang', newLang);
    updateInterface();
});
