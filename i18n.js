function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('selected_lang', lang);
  
  // Update elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update the language selector button text if exists
  const langSelectorText = document.getElementById('current-lang-text');
  if (langSelectorText) {
    langSelectorText.innerText = translations[lang]['lang_' + lang];
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selected_lang') || 'vi';
  setLanguage(savedLang);
});