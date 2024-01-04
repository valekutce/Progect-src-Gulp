document.addEventListener('DOMContentLoaded', () => {

    $('.slider__wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-arrow-left fa-3x" aria-hidden="true"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i></button>`,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
        });


// let pictures = document.querySelectorAll('picture');

// pictures.forEach(picture => {
//     let pictureChiald = picture.lastElementChild;
//     if (pictureChiald.classList.contains('stretched-media')) {
//         picture.style.display = "inline-block";
//         picture.classList.add('stretched-media'); 
//     }
// });












});