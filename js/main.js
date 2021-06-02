document.addEventListener('DOMContentLoaded', function() {
    const elemetsCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemetsCarousel, {
        // durata
        duration: 150,
        // distanza di prospettiva, di default 0
        dist: -80,
        // distanza tra le immagini ai lati
        shift: 5,
        padding: 5,
        // numero di immagini visibili in pagina
        numVisible: 3,
        //puntini
        indicators: true,
        //bloccare l'inizio e la fine
        noWrap: false
    });
});
