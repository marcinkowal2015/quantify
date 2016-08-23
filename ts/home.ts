
$(document).ready(() => {
    let $carousel:any = $('.carousel__container'),
        $carouselImages:any,
        $carouselImagesContainer:any,
        $contentCarousel:any = $('.content__carousel'),
        $contentContainer:any = $('.content'),
        $header =  $('.header'),
        $readMore = $('#read-more'),
        activeSlideID = 0,
        readMoreLinks:string[] = [],
        // header + rest of the container need to be 100vh
        containerTargetHeight:number = window.innerHeight - $header.height();

    $('.content__read-more__link span')
        .each( (index:number, el:any) => readMoreLinks.push( el.innerText ) );
    if($carousel[0]){
        $carousel
            // image carousel init resize
            .height(containerTargetHeight)
            // image carousel init
            .on('init' , () =>{
                $carouselImagesContainer= $('.carousel__image-item');
                $carouselImages = $('.carousel__container img');

                $carouselImagesContainer
                    .height(containerTargetHeight);
                $carouselImages
                    .each((index:any, el:any) => {
                        let $el = $(el);

                        if( ( $el.width() / $el.height() ) < ( $carousel.width() / containerTargetHeight ) ) {
                            $el
                                .removeClass('height-100')
                                .addClass('width-100')
                        } else {
                            $el
                                .removeClass('width-100')
                                .addClass('height-100');
                        }
                    });
            })
            .slick({
                arrow : true,
                dots: true,
                asNavFor: $contentCarousel,
                autoplay: true,
                autoplaySpeed: 4500,
            });

        $(window)
            .on('resize' , () => {
                containerTargetHeight = window.innerHeight - $header.height();
                $carousel
                    .height(containerTargetHeight);
                $carouselImagesContainer
                    .height(containerTargetHeight);
                $carouselImages
                    .each((index:any, el:any) => {
                        let $el = $(el);
                        console.log( $el.width() + ' ' + $el.height() + ' ' + $carousel.width() + ' ' + containerTargetHeight);
                        if( ( $el.width() / $el.height() ) < ( $carousel.width() / containerTargetHeight ) ) {
                            console.log('width-100');
                            $el
                                .removeClass('height-100')
                                .addClass('width-100')
                        } else {
                            console.log('height-100');
                            $el
                                .removeClass('width-100')
                                .addClass('height-100');
                        }
                    });
            });
    }
    if($contentCarousel[0]){
        $contentCarousel
            .slick({
                arrows: false,
                asNavFor: $carousel
            });
    }
    if($contentContainer[0]){
        $contentContainer
            .height(containerTargetHeight);
        $(window)
            .on('resize' , () => {
                containerTargetHeight = window.innerHeight - $header.height();
                $contentContainer.height(containerTargetHeight);
            });
    }
    if($readMore[0]){
        $readMore
            .attr('href' , readMoreLinks[activeSlideID]);
        $carousel.on('afterChange' , (slick:any, currentSlide:any)=>{
            activeSlideID = currentSlide.currentSlide;
            $readMore
                .attr('href' , readMoreLinks[activeSlideID]);
        })
    }
});
