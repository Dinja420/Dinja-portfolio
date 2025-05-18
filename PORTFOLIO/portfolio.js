document.addEventListener("DOMContentLoaded", function () {
    // 🌙 Dark mode toggle dugme
    const toggleButton = document.getElementById('darkModeToggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // 🧠 Nasumični savet
    function prikaziSavet() {
        const saveti = [
            "Uči svaki dan, makar i 10 minuta.",
            "Zapiši ideje čim ti padnu na pamet.",
            "Ne boj se da pitaš za pomoć.",
            "Koristi komentare u kodu.",
            "Redovno pravi backup projekta."
        ];
        const nasumican = Math.floor(Math.random() * saveti.length);
        document.getElementById('savet').textContent = saveti[nasumican];
    }

    // 📅 Datum u footeru
    const datum = new Date().toLocaleDateString('sr-RS');
    const footerText = document.getElementById('footerText');
    if (footerText) {
        footerText.innerHTML = `&copy; Aleksandar Dinić - ${datum}. Sva prava zadržana.`;
    }

    // 🔫 Pištolj dugme
    const shootButton = document.getElementById("shootButton");

    if (shootButton) {
        shootButton.addEventListener("click", () => {
            const skull = document.createElement("div");
            skull.className = "skull";
            skull.textContent = "💀";

            // Ograničenje da ne izleti van ekrana
            const skullSize = 40;
            const x = Math.random() * (window.innerWidth - skullSize);
            const y = Math.random() * (window.innerHeight - skullSize);

            skull.style.left = `${x}px`;
            skull.style.top = `${y}px`;

            document.body.appendChild(skull);

            setTimeout(() => {
                skull.remove();
            }, 6000); 
        });
    }
});
