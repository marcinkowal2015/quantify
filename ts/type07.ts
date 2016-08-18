$(document).ready(() => {
    let $titles = $('.type07__main__business-type__title'),
        $contents = $('.type07__main__content__item');
    if ($titles[0]){
        $titles
            .each(function (index) {
                $(this)
                    .on('click' , () => {
                        $titles.removeClass('active');
                        $contents.removeClass('active');
                        $($titles[index]).addClass('active');
                        $($contents[index]).addClass('active');
                    })
            })
    }
});
