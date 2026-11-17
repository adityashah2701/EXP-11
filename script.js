/* ============================================================
   Aditya Shah — Web-Based Resume (Experiment No. 11)
   Interactions: theme toggle, mobile menu, scrollspy, footer year.
   No dependencies beyond Bootstrap's bundle + Lucide.
   ============================================================ */

(function () {
    'use strict';

    var root = document.documentElement;

    /* ---------------------------------------------------------
       1. Theme toggle
       The initial theme is set by an inline script in <head>
       (before first paint) so there is no flash. Here we only
       flip it, persist it, and animate the switch.
       --------------------------------------------------------- */
    var themeToggle = document.getElementById('themeToggle');
    var metaThemeColor = document.getElementById('metaThemeColor');

    function currentTheme() {
        return root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
    }

    function syncThemeMeta() {
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                getComputedStyle(document.body).backgroundColor
            );
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';

            // Brief class that cross-fades surfaces during the switch.
            root.classList.add('theme-switching');
            root.setAttribute('data-bs-theme', next);

            try {
                localStorage.setItem('theme', next);
            } catch (e) { /* storage unavailable — theme still switches */ }

            if (themeToggle) {
                themeToggle.setAttribute(
                    'aria-label',
                    next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
                );
            }

            window.setTimeout(function () {
                root.classList.remove('theme-switching');
            }, 450);

            syncThemeMeta();
        });
    }

    // Keep the browser UI color in step with the persisted theme.
    syncThemeMeta();

    /* ---------------------------------------------------------
       2. Mobile menu — close after a link is chosen
       --------------------------------------------------------- */
    var mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu && window.bootstrap && window.bootstrap.Collapse) {
        mobileMenu.addEventListener('click', function (event) {
            if (!event.target.closest('a')) return;
            window.bootstrap.Collapse.getOrCreateInstance(mobileMenu).hide();
        });
    }

    /* ---------------------------------------------------------
       3. Scrollspy — highlight the nav link of the section
          currently crossing the middle of the viewport.
       --------------------------------------------------------- */
    var spyLinks = Array.prototype.slice.call(
        document.querySelectorAll('[data-spy-link]')
    );

    var sectionIds = [];
    spyLinks.forEach(function (link) {
        var id = (link.getAttribute('href') || '').replace('#', '');
        if (id && sectionIds.indexOf(id) === -1) sectionIds.push(id);
    });

    var sections = sectionIds
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    function setActive(id) {
        spyLinks.forEach(function (link) {
            var isActive = link.getAttribute('href') === '#' + id;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    if ('IntersectionObserver' in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, {
            rootMargin: '-45% 0px -50% 0px',
            threshold: 0
        });

        sections.forEach(function (section) { spy.observe(section); });

        // At the very bottom of the page, Contact wins even if the
        // observation band never reaches the last section.
        window.addEventListener('scroll', function () {
            var atBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 48;
            if (atBottom) setActive(sections[sections.length - 1].id);
        }, { passive: true });
    }

    /* ---------------------------------------------------------
       4. Footer year
       --------------------------------------------------------- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ---------------------------------------------------------
       5. Lucide icons
       --------------------------------------------------------- */
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
})();
