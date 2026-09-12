/**
 * Language Manager (Cookie-free)
 * Handles instant language restoration in <head>, UI switcher injection,
 * localStorage persistence, and cross-page link synchronization.
 */
(function () {
    // 1. Detect language from URL param or localStorage
    function detectLanguage() {
        try {
            var search = window.location.search;
            if (search) {
                var match = search.match(/[?&]lang=(de|en)(?:&|$)/);
                if (match) return match[1];
            }
        } catch (e) {}

        try {
            var local = localStorage.getItem('site_lang');
            if (local === 'de' || local === 'en') return local;
        } catch (e) {}

        return 'en';
    }

    // Apply immediately to <html> in <head> to prevent flicker
    var currentLang = detectLanguage();
    document.documentElement.setAttribute('lang', currentLang);

    // 2. Synchronize all internal page links to preserve ?lang=...
    function updatePageLinks(lang) {
        var links = document.querySelectorAll('a[href]');
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('javascript:')) {
                continue;
            }
            var parts = href.split('#');
            var pathPart = parts[0].replace(/[?&]lang=[^&]*/g, '').replace(/\?$/, '');
            var hashPart = parts.length > 1 ? '#' + parts[1] : '';
            var sep = pathPart.indexOf('?') !== -1 ? '&' : '?';
            links[i].setAttribute('href', pathPart + sep + 'lang=' + lang + hashPart);
        }
    }

    // 3. Switch language, update storage, URL bar, and links
    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);

        try {
            localStorage.setItem('site_lang', lang);
        } catch (e) {}

        try {
            if (window.history && window.history.replaceState) {
                var cleanSearch = window.location.search.replace(/[?&]lang=[^&]*/g, '').replace(/\?$/, '');
                var sep = cleanSearch ? (cleanSearch.indexOf('?') !== -1 ? '&' : '?') : '?';
                var newSearch = cleanSearch + (cleanSearch ? sep : '?') + 'lang=' + lang;
                window.history.replaceState(null, '', window.location.pathname + newSearch + window.location.hash);
            }
        } catch (e) {}

        updatePageLinks(lang);
    }

    // 4. Inject floating switcher buttons and bind click handler
    function initSwitcher() {
        if (document.querySelector('.lang-switch-top')) return;

        var switcher = document.createElement('div');
        switcher.className = 'lang-switch-top';
        switcher.setAttribute('role', 'group');
        switcher.setAttribute('aria-label', 'Language selection');
        switcher.innerHTML =
            '<button type="button" class="lang-btn" data-switch="en" title="English" aria-label="Switch to English">' +
                '<img src="images/us.svg" alt="English" class="flag-icon" width="20" height="14">' +
                '<span>EN</span>' +
            '</button>' +
            '<button type="button" class="lang-btn" data-switch="de" title="Deutsch" aria-label="Auf Deutsch wechseln">' +
                '<img src="images/at.svg" alt="Deutsch" class="flag-icon" width="20" height="14">' +
                '<span>DE</span>' +
            '</button>';

        switcher.addEventListener('click', function (e) {
            var btn = e.target.closest('.lang-btn');
            if (!btn) return;
            e.preventDefault();
            var targetLang = btn.getAttribute('data-switch');
            if (targetLang) {
                applyLanguage(targetLang);
            }
        });

        if (document.body.firstChild) {
            document.body.insertBefore(switcher, document.body.firstChild);
        } else {
            document.body.appendChild(switcher);
        }

        updatePageLinks(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
        initSwitcher();
    }
})();
