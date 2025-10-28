// Wait for DOM to be ready
// Theme toggle functionality
function initializeTheme() {
    console.log('Initializing theme...');
    
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    
    const html = document.documentElement;
    
    // Function to update the theme
    function updateTheme(isDark) {
        //console.log('Updating theme to:', isDark ? 'dark' : 'light');
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    }
    
    // Load saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        updateTheme(savedTheme === 'dark');
    } else {
        updateTheme(prefersDark);
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', (e) => {
        //console.log('Theme toggle clicked');
        e.preventDefault();
        const isDark = !html.classList.contains('dark');
        updateTheme(isDark);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
    initializeTheme();
}

// Back to top button
const btn = document.getElementById("backToTop");
if (btn) {
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}