// i18n / multi-language support
const translations = {
  en: { 
    site_name: "ReefSMP",
    nav_rules: "Rules",
    nav_tos: "ToS",
    nav_imprint: "Imprint",
    nav_privacy: "Privacy",
    nav_join: "Join",
    nav_faq: "FAQ",
    btn_play: "Play Now",
    ip_copied: "✓ IP copied!",
    hero_title: "Join the Adventure!",
    hero_subtitle: "Explore, build and become a legend with your friends in our unique survival world!",
    // ... add all the other translations here ...
  },
  tr: { 
    site_name: "ReefSMP",
    nav_rules: "Kurallar",
    nav_tos: "Hizmet Şartları",
    nav_imprint: "Yasal Bilgi",
    nav_privacy: "Gizlilik",
    nav_join: "Katıl",
    nav_faq: "SSS",
    btn_play: "Hemen Oyna",
    ip_copied: "✓ IP kopyalandı!",
    hero_title: "Maceraya Katıl!",
    hero_subtitle: "Arkadaşlarınla benzersiz hayatta kalma dünyamızda keşfet, inşa et ve efsane ol!",
    // ... add all other Turkish translations ...
  }
};

// Simple changeLanguage function
function changeLanguage(lang) {
  localStorage.setItem("preferred_language", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update text for elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred_language") || navigator.language.split("-")[0] || "en";
  const defaultLang = translations[savedLang] ? savedLang : "en";
  changeLanguage(defaultLang);

  // Language dropdown click
  document.querySelectorAll(".dropdown-item[data-lang]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = item.getAttribute("data-lang");
      if (selectedLang) changeLanguage(selectedLang);
    });
  });
});