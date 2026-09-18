const rtlLanguages = ['ar', 'fa', 'he', 'ku', 'ps', 'ur', 'yi'];
const documentElement = document.documentElement;
const bootstrapStylesheet = document.getElementById('bootstrap-stylesheet');
const scrollDirection = document.getElementById('scroll-direction');

// Keep the layout direction in sync with the current page language.
function updateLanguageDirection() {
  const language = documentElement.lang.toLowerCase().split('-')[0];
  const isRtl = rtlLanguages.includes(language);
  const direction = isRtl ? 'rtl' : 'ltr';

  documentElement.dir = direction;
  bootstrapStylesheet.href = `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap${isRtl ? '.rtl' : ''}.min.css`;
  scrollDirection.textContent = isRtl ? '\u2190' : '\u2192';
}

updateLanguageDirection();

// Google Translate and other tools may change the lang attribute after load.
const languageObserver = new MutationObserver(updateLanguageDirection);
languageObserver.observe(documentElement, {
  attributes: true,
  attributeFilter: ['lang']
});