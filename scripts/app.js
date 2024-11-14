// const search = document.querySelector(".search")
// const btn = document.querySelector(".btn")
// const input = document.querySelector(".input")

// btn.addEventListener("click", ()=>{
//  search.classList.toggle("active")
//  input.focus()
// })

let currentLanguage = 'ru';

function updateSelectedLanguage() {
    const selectedContainer = document.querySelector(".dropdown-item-selected");
    const selectedText = selectedContainer.querySelector("span");
    const selectedFlag = selectedContainer.querySelector("img");

    const languages = {
        ru: { label: "Рус", svgPath: "/assets/flags/Russsia.png" },
        en: { label: "Eng", svgPath: "/assets/flags/En flag.png" },
        uz: { label: "O'z", svgPath: "/assets/flags/Uz flag.png" }
    };

    selectedText.textContent = languages[currentLanguage].label;
    selectedFlag.src = languages[currentLanguage].svgPath;

    document.querySelectorAll(".dropdown-content .dropdown-item").forEach(item => {
        item.classList.remove("selected");
    });
    document.querySelector(`.dropdown-item[onclick="selectLanguage('${currentLanguage}')"]`).classList.add("selected");
}

function selectLanguage(language) {
    currentLanguage = language;
    updateSelectedLanguage();

    const pathSegments = window.location.pathname.split('/');
    pathSegments[1] = language;  

    const newUrl = `${window.location.origin}${pathSegments.join('/')}`;

    window.location.href = newUrl;
}

function detectLanguageFromUrl() {
    const pathSegments = window.location.pathname.split('/');
    const languageSegment = pathSegments[1];

    if (['ru', 'en', 'uz'].includes(languageSegment)) {
        currentLanguage = languageSegment;
    } else {
        pathSegments[1] = 'ru';
        const defaultUrl = `${window.location.origin}${pathSegments.join('/')}`;
        window.history.replaceState({}, '', defaultUrl);
        currentLanguage = 'ru';
    }

    updateSelectedLanguage();
}

detectLanguageFromUrl();