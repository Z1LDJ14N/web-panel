// Database User Sederhana
const users = {
    "zildx": "admin123",
    "guest": "ptero123",
    "zian": "2026"
};

// Fungsi Login
function auth() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const err = document.getElementById('err');

    if (users[user] && users[user] === pass) {
        localStorage.setItem("zildx_session", user);
        window.location.href = "dashboard.html";
    } else {
        err.classList.remove('hidden');
        setTimeout(() => err.classList.add('hidden'), 3000);
    }
}

// Cek Sesi saat masuk Dashboard
window.onload = function() {
    const path = window.location.pathname;
    const session = localStorage.getItem("zildx_session");

    if (path.includes("dashboard.html")) {
        if (!session) {
            window.location.href = "index.html"; // Tendang balik kalau belum login
        } else {
            document.getElementById('welcome-user').innerText = session;
            addLog(`User ${session} logged in from sin-01.`);
        }
    }
};

function logout() {
    localStorage.removeItem("zildx_session");
    window.location.href = "index.html";
}

function addLog(msg) {
    const log = document.getElementById('console-log');
    if (log) {
        const p = document.createElement('p');
        p.className = "text-blue-400";
        p.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
        log.appendChild(p);
    }
}
