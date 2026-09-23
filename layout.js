// Συνάρτηση που δημιουργεί το κοινό Navbar και Footer
function loadSharedLayout() {
    const existingNavbar = document.querySelector('.navbar');
    if (existingNavbar) {
        existingNavbar.remove();
    }

    // 1. Δημιουργία του Navbar με το κουμπί Φυσαρμόνικας (Hamburger) για κινητά
    const navbarHTML = `
        <nav class="navbar">
            <a href="index.html" class="logo-container">
                <img src="images/logo.png" alt="Cyclades Matcher Logo" class="nav-logo">
                <span class="nav-title">Cyclades Matcher</span>
            </a>
            
            <!-- 🔑 ΤΟ ΚΟΥΜΠΙ ΤΗΣ ΦΥΣΑΡΜΟΝΙΚΑΣ -->
            <button class="menu-toggle" id="mobile-menu-btn" aria-label="Μενού επιλογών">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <ul class="navbar-menu" id="navbar-menu-list">
                <li><a href="index.html" id="nav-home">Αρχική</a></li>
                <li><a href="index.html#quiz-anchor">Το Κουίζ</a></li>
                <li><a href="islands.html" id="nav-islands">Τα Νησιά</a></li>
                <li><a href="planner.html" id="nav-planner">Island Planner</a></li>
                <li><a href="trivia.html" id="nav-trivia">Trivia Quiz</a></li>
                <li><a href="info.html" id="nav-info">Οδηγός Κυκλάδων</a></li>
            </ul>
        </nav>
    `;
    
    const footerHTML = `
        <footer class="footer">
            <p>&copy; ${new Date().getFullYear()} Cyclades Matcher. Φτιαγμένο με 💙 για το Αιγαίο.</p>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    if (!document.querySelector('.footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // 🔑 ΛΟΓΙΚΗ ΦΥΣΑΡΜΟΝΙΚΑΣ: Ανοίγει και κλείνει το μενού στα κινητά
    const menuBtn = document.getElementById("mobile-menu-btn");
    const menuList = document.getElementById("navbar-menu-list");

    if (menuBtn && menuList) {
        menuBtn.addEventListener("click", function(e) {
            e.stopPropagation(); // Σταματάει το event για να μην επηρεάσει το body
            menuList.classList.toggle("mobile-open");
            menuBtn.classList.toggle("is-active"); // Για να κάνουμε εφέ animation στο κουμπί
        });

        // Κλείνει το μενού αν ο χρήστης κάνεις κλικ οπουδήποτε αλλού στην οθόνη
        document.addEventListener("click", function() {
            menuList.classList.remove("mobile-open");
            menuBtn.classList.remove("is-active");
        });
    }

    // ΕΛΕΓΧΟΣ URL (Active γαλάζιο χρώμα στα γράμματα)
    const currentUrl = window.location.href.toLowerCase();
    document.getElementById("nav-home")?.classList.remove("active");
    document.getElementById("nav-islands")?.classList.remove("active");
    document.getElementById("nav-planner")?.classList.remove("active");
    document.getElementById("nav-trivia")?.classList.remove("active");
    document.getElementById("nav-info")?.classList.remove("active");

    if (currentUrl.includes("islands.html") || currentUrl.includes("island.html")) {
        document.getElementById("nav-islands")?.classList.add("active");
    } else if (currentUrl.includes("planner.html")) {
        document.getElementById("nav-planner")?.classList.add("active");
    } else if (currentUrl.includes("trivia.html")) {
        document.getElementById("nav-trivia")?.classList.add("active");
    } else if (currentUrl.includes("info.html")) {
        document.getElementById("nav-info")?.classList.add("active");
    } else {
        document.getElementById("nav-home")?.classList.add("active");
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSharedLayout);
} else {
    loadSharedLayout();
}
