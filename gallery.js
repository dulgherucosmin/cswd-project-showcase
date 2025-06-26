const gallery = document.getElementById('lightgallery');
if (gallery) {
    lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        selector: 'a'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const imageBoxes = document.querySelectorAll('.image-box');

    document.querySelector('[data-filter="all"]').classList.add('active-filter');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));

            button.classList.add('active-filter');

            const filterValue = button.getAttribute('data-filter');
            
            imageBoxes.forEach(box => {
                if (filterValue === 'all' || box.getAttribute('data-name') === filterValue) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});
