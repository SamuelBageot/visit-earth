const menuBtn = document.querySelector('.navigation__button');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebarOpen');
})