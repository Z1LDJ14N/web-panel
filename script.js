// DATABASE & AUTH (Sama seperti sebelumnya)
const users = { "zildx": "admin123", "zian": "2026" };

function auth() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (users[user] === pass) {
        localStorage.setItem("zildx_session", user);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('err').classList.remove('hidden');
    }
}

// LOGIKA TAB SWITCHER
function openTab(tabName) {
    // Sembunyikan semua tab
    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.classList.add("hidden");
    }
    
    // Matikan semua tombol aktif
    const buttons = document.getElementsByClassName("tab-btn");
    for (let btn of buttons) {
        btn.classList.remove("active", "border-blue-500", "text-white");
        btn.classList.add("border-transparent", "text-slate-500");
    }

    // Tampilkan tab yang dipilih
    document.getElementById(tabName).classList.remove("hidden");
    
    // Aktifkan tombol yang diklik
    event.currentTarget.classList.add("active", "border-blue-500", "text-white");
    event.currentTarget.classList.remove("border-transparent", "text-slate-500");
}

// PROTEKSI HALAMAN
window.onload = function() {
    if (window.location.pathname.includes("dashboard.html")) {
        if (!localStorage.getItem("zildx_session")) {
            window.location.href = "index.html";
        }
    }
}

function logout() {
    localStorage.removeItem("zildx_session");
    window.location.href = "index.html";
}
