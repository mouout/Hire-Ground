const navbarItems = document.querySelectorAll(".navbar");

const activeLink = () => {
    navbarItems.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

navbarItems.forEach((item) => {
    item.addEventListener('click', activeLink);
});