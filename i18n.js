function applyTranslationsTo(container, lang) {
  if (!translations || !translations[lang]) return;
  container.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

function setLanguage(lang) {
  if (!translations || !translations[lang]) return;
  
  try {
    localStorage.setItem('selected_lang', lang);
  } catch (e) {}
  
  applyTranslationsTo(document, lang);
  
  const langSelectorText = document.getElementById('current-lang-text');
  if (langSelectorText) {
    langSelectorText.innerText = translations[lang]['lang_' + lang];
  }
}

window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'vi';
  try {
    savedLang = localStorage.getItem('selected_lang') || 'vi';
  } catch (e) {}
  setLanguage(savedLang);
  
  // Watch for dynamic DOM changes
  const observer = new MutationObserver((mutations) => {
    let shouldTranslate = false;
    for (let m of mutations) {
      if (m.addedNodes.length > 0) {
        shouldTranslate = true;
        break;
      }
    }
    if (shouldTranslate) {
      try {
        const currentLang = localStorage.getItem('selected_lang') || 'vi';
        applyTranslationsTo(document, currentLang);
      } catch (e) {}
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
});