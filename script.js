/* ============================================================
   script.js — Main Vanilla JavaScript
   Personal Portfolio Website — Abubakar Kerur
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ==================== 1. MOBILE MENU TOGGLE ====================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        // Toggle mobile menu open/closed on button click
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.setAttribute(
                'aria-expanded', 
                navMenu.classList.contains('active')
            );
        });

        // Close mobile menu when any navigation link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close mobile menu if clicked outside
        document.addEventListener('click', (event) => {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ==================== 2. NAVBAR SCROLL EFFECT ====================
    // Adds a subtle drop shadow to the navbar once the user scrolls down
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.12)';
            } else {
                navbar.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }

    // ==================== 3. ACTIVE NAV LINK ON SCROLL (SPY) ====================
    // Only runs on index.html where in-page section anchors exist (#about, #skills, etc.)
    const sections = document.querySelectorAll('section[id]');
    const sectionNavLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length > 0 && sectionNavLinks.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 120; // offset for fixed navbar
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

});
