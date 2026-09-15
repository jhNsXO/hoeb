/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Description: Portfolio scripts rewritten with pure vanilla JS (no jQuery).
*/

(function() {
    'use strict';

    function init() {
        // Remove no-js class
        document.documentElement.classList.remove('no-js');

        // Show current year
        const currentYear = document.getElementById('current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }

        const header = document.querySelector('header');

        // Close mobile menu when nav link is clicked
        document.querySelectorAll('header a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (header && header.classList.contains('active')) {
                    header.classList.remove('active');
                    document.body.classList.remove('active');
                }
            });
        });

        // Scroll to top
        document.addEventListener('click', function(e) {
            const toTop = e.target.closest('#to-top');
            if (toTop) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        // Scroll to first element from lead down button
        const leadDown = document.querySelector('#lead-down span');
        if (leadDown) {
            leadDown.addEventListener('click', function() {
                const lead = document.getElementById('lead');
                if (lead && lead.nextElementSibling) {
                    lead.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Create timeline
        const timeline = document.getElementById('experience-timeline');
        if (timeline) {
            const userBlocks = Array.from(timeline.children).filter(function(el) {
                return el.tagName === 'DIV';
            });

            userBlocks.forEach(function(block) {
                block.classList.add('vtimeline-content');

                const point = document.createElement('div');
                point.className = 'vtimeline-point';

                const icon = document.createElement('div');
                icon.className = 'vtimeline-icon';
                icon.innerHTML = '<svg class="icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>';
                point.appendChild(icon);

                const vblock = document.createElement('div');
                vblock.className = 'vtimeline-block';

                const date = block.getAttribute('data-date');
                if (date) {
                    const dateSpan = document.createElement('span');
                    dateSpan.className = 'vtimeline-date';
                    dateSpan.textContent = date;
                    vblock.appendChild(dateSpan);
                }

                timeline.replaceChild(point, block);
                vblock.appendChild(block);
                point.appendChild(vblock);
            });
        }

        // Open mobile menu
        const menuOpen = document.getElementById('mobile-menu-open');
        if (menuOpen) {
            menuOpen.addEventListener('click', function() {
                if (header) header.classList.add('active');
                document.body.classList.add('active');
            });
        }

        // Close mobile menu
        const menuClose = document.getElementById('mobile-menu-close');
        if (menuClose) {
            menuClose.addEventListener('click', function() {
                if (header) header.classList.remove('active');
                document.body.classList.remove('active');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
