
$(document).ready(() => {
    let $carousel:any = $('.carousel__container'),
        $contentCarousel:any = $('.content__carousel'),
        $contentContainer:any = $('.content'),
        $header =  $('.header'),
        $readMore = $('#read-more'),
        activeSlideID = 0,
        readMoreLinks:string[] = [],
        // header + rest of the container need to be 100vh
        containerTargetHeight:number = window.innerHeight - $header.height();

    $('.content__read-more__link span').each(function()  {
        //if this case if you use () => {} construction, the context will not change and so "this" will not link to current element of the jquery array.
        readMoreLinks.push( this.innerText )
    });
    if($carousel[0]){
        $carousel
            // image carousel init resize
            .height(containerTargetHeight)
            // image carousel init
            .slick({
                arrow : true,
                dots: true,
                asNavFor: $contentCarousel,
                autoplay: true,
                autoplaySpeed: 3000

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
