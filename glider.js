window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel-indicador',
        arrows: {
            prev: '.carousel-before',
            next: '.carousel-after'
        },
        responsive: [
            {
            breakpoint: 450,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              }
            },{
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
});