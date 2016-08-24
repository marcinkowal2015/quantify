$(document).ready(() => {
    let $maps = $('.geographical-coverage__map img'),
        $tabs = $('.geographical-coverage__tabs__item'),
        $tabContent = $('.geographical-coverage__tab-content__item');

    if($maps[0]){
        let title:string = getQueryVariable('title') || '' ,
            initialActive:number = 0;

        $tabs.each( (index:number,el:HTMLObjectElement) => {
           if(el.innerText.toLowerCase() == title.toLowerCase()){
               initialActive = index;
               console.log(initialActive);
           }
        });
        $($maps[initialActive])
            .animate({
                opacity: '1'
            }, 300 );
        $($tabContent[initialActive])
            .css({
                visibility: 'visible'
            });
        $($tabs[initialActive])
            .addClass('active');
        $tabs.each(function(index) {
            $(this).on('click' , ()=>{
                $($maps)
                    .animate({
                        opacity: 0
                    } , 300 );
                $($tabContent)
                    .removeAttr('style');
                $($tabs)
                    .removeClass('active');
                $($maps[index])
                    .stop()
                    .animate({
                        opacity: '1'
                    }, 300);
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
function getQueryVariable(variable:string)
{
    let query = window.location.search.substring(1),
         vars = query.split("&");

    for (let i=0 ; i < vars.length ; i++) {
        let pair = vars[i].split("=");
        if( pair[0] == variable ) {
            return decodeURIComponent(pair[1]);
        }
    }
    return('');
}