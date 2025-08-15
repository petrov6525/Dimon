window.onload = function() {
    document.querySelectorAll('.left-nav_item').forEach(elem => {
        elem.addEventListener('click', e => {
            document.querySelectorAll('.left-nav_item').forEach(elem2 => {
                elem2.classList.remove('active');
            })
            elem.classList.toggle('active');
        })
    })
}