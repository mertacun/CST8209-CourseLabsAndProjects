document.addEventListener('DOMContentLoaded', function () {
    const movieList = document.getElementById('movieList');
    const searchInput = document.getElementById('search');

    function displayMovies(movies) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${movie.title}</strong> (${movie.year}) <p class="description">${movie.description}</p>`;
            const description = listItem.querySelector('.description');
            description.style.display = 'none';
            listItem.addEventListener('click', function () {
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
            });
            movieList.appendChild(listItem);
        });
    }

    displayMovies(movies);

    function filterMovies(query) {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        displayMovies(filteredMovies);
    }

    searchInput.addEventListener('input', function () {
        filterMovies(this.value);
    });
});
