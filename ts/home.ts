
$(document).ready(() => {
    let $carousel:any = $('.carousel-container'),
        $contentCarousel:any = $('.content-carousel'),
        $header =  $('.header'),
        containerTargetHeight:number = window.innerHeight - $header.height();
    if ($carousel[0]){
        $carousel
            .height(containerTargetHeight)
            .slick({
                arrow : true,
                dots: true,
                asNavFor: $contentCarousel
            });
        $(window)
            .on('resize' , () => {
            containerTargetHeight = window.innerHeight - $header.height();
            $carousel.height(containerTargetHeight);
            });
    }
    if($contentCarousel[0]){
        $contentCarousel
            .slick({
                arrows: false,
                asNavFor: $carousel
            });
    }
});
