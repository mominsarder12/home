let nav_li = document.querySelectorAll('nav ul li')
nav_li.forEach(function (links) {
    links.addEventListener('click', () => {
        nav_li.forEach(function (links) {
            links.classList.remove('active');
        })
        links.classList.add('active');
    })
})