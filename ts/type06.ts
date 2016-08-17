$(document).ready(() => {
    let $maps = $('.geographical-coverage__map img'),
        $tabs = $('.geographical-coverage__tabs__item'),
        $tabContent = $('.geographical-coverage__tab-content__item');
    if($maps[0]){
        $($maps[0])
            .css({
                visibility: 'visible'
            });
        $($tabContent[0])
            .css({
                visibility: 'visible'
            });
        $($tabs[0])
            .addClass('active');
        $tabs.each(function(index) {
            $(this).on('click' , ()=>{
                $($maps)
                    .removeAttr('style');
                $($tabContent)
                    .removeAttr('style');
                $($tabs)
                    .removeClass('active');
                $($maps[index])
                    .css({
                        visibility: 'visible'
                    });
                $($tabContent[index])
                    .css({
                        visibility: 'visible'
                    });
                $($tabs[index])
                    .addClass('active');
            })
        });
    }
});
