const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

let currentLanguage = 'en'; // Default language

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
    updateSelectedLanguage(); // Update the selected language when opening dropdown
});

function updateSelectedLanguage() {
    const selectedContainer = document.querySelector(".dropdown-item-selected");
    const selectedText = selectedContainer.querySelector("span");
    const selectedFlag = selectedContainer.querySelector("svg");

    const languages = {
        ru: { label: "Рус", svgPath: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <!-- Russian flag SVG -->
                            <path fill="#1435a1" d="M1 11H31V21H1z"></path>
                            <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff"></path>
                            <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#c53a28"></path>
                        </svg>` },
        en: { label: "Eng", svgPath: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
      <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
      <path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path>
      <path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path>
      <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
      <path fill="#a62842" d="M2 15.077H31V16.923H2z"></path>
      <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
      <path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path>
      <path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path>
      <path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
    </svg>` },
        uz: { label: "O'z", svgPath: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
      <path fill="#fff" d="M1 11H31V21H1z"></path>
      <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#4498b3"></path>
      <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#55b44b"></path>
      <path fill="#be2a2c" d="M1 12H31V13H1z"></path>
      <path fill="#be2a2c" d="M1 19H31V20H1z"></path>
    </svg>` }
    };

    // Update the selected language text and flag
    selectedText.textContent = languages[currentLanguage].label;
    selectedFlag.innerHTML = languages[currentLanguage].svgPath;

    // Highlight the selected item in the dropdown
    document.querySelectorAll(".dropdown-content .dropdown-item").forEach(item => {
        item.classList.remove("selected");
    });
    document.querySelector(`.dropdown-item[onclick="selectLanguage('${currentLanguage}')"]`).classList.add("selected");
}

function selectLanguage(language) {
    currentLanguage = language; // Update the current language
    updateSelectedLanguage(); // Update the displayed language and flag
}

// Call this to initialize the dropdown on page load
updateSelectedLanguage();
