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

        // Animate to section when nav is clicked
        document.querySelectorAll('header a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (this.classList.contains('no-scroll')) return;

                const targetId = this.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });

                        // Hide the menu once clicked if mobile
                        if (header && header.classList.contains('active')) {
                            header.classList.remove('active');
                            document.body.classList.remove('active');
                        }
                    }
                }
            });
        });

        // Scroll to top (delegated for dynamically loaded footer)
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

        // Scroll to section for lead content links
        document.querySelectorAll('#lead-content a[href^="#"]').forEach(function(link) {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

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
                icon.innerHTML = '<i class="fa fa-map-marker"></i>';
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
