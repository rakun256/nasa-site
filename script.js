// JavaScript for navigation and dynamic year update

function navigateTo(page) {
    window.location.href = page;
}

document.getElementById('year').textContent = new Date().getFullYear();
