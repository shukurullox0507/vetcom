const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
    updateSelectedLanguage();
});

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
    
    // Get the current path and replace the language segment
    const pathSegments = window.location.pathname.split('/');
    pathSegments[1] = language;  // Update the language part (second segment)
    
    // Construct the new URL with the updated language path
    const newUrl = `${window.location.origin}${pathSegments.join('/')}`;
    
    // Redirect to the new URL, which will reload the page
    window.location.href = newUrl;
}

updateSelectedLanguage();
