document.addEventListener('DOMContentLoaded', () => {
    const destinationLists = document.querySelectorAll('.destination-list-item');

    if(destinationLists.length > 0) {
        destinationLists[0].classList.add('selected');
    }

    destinationLists.forEach((val, idx) => {

        destinationLists
        val.addEventListener('click', (event) => {

        // Block Page Load
        event.preventDefault();

            destinationLists.forEach(item => {
                item.classList.remove('selected');
            });

            val.classList.add('selected');
        });
    });
});
