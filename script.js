document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMobile = document.querySelector(".nav-mobile");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener("click", () => {
        navMobile.classList.add("active");
        overlay.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        navMobile.classList.remove("active");
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        navMobile.classList.remove('active');
        overlay.classList.remove('active');
    });
});
