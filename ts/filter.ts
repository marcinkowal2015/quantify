$(document).ready(()=> {

    // $('#filter-form').submit(e =>{
    //    search();
    //    e.preventDefault();
    //    return false;
    // });
    // $items.each(function () {
    //    items.push(this.innerText.toLocaleLowerCase());
    // });
    //
    // if( $input[0]){
    //    $input.keyup(() =>{
    //       search();
    //    });
    // }
    // function search(){
    //    let inputText:string = $input.val().toLowerCase();
    //    $items
    //        .removeAttr('style');
    //    items
    //        .forEach( (el,index) => {
    //           if( el.indexOf(inputText) < 0) {
    //              $($items[index]).css({
    //                 display: 'none'
    //              })
    //           }
    //        });
    // }

    let $select:any = $('#dictionary'),
        $items = $('.filter__item'),
        $options:any = $select.find('option'),
        $visible = $items,
        $dynamicContent = $('.dynamic-content'),
        initialValueString = getQueryVariable('title');

    if($select[0]){
        $select
            .selectize({
                create: false,
                sortField: 'text'
            })
            .change(()=>{
                if ($select.val() == 0){
                    $visible = $items;
                    $visible
                        .removeAttr('style');
                } else {
                    $items
                        .css({
                            display : 'none'
                        });
                    $visible = $('.post-parent-'+ $select.val() );
                    $visible
                        .removeAttr('style');
                }
            });
        let selectize = $select[0].selectize;
        selectize.setValue(selectize.search(initialValueString).items[0].id);


        $dynamicContent.on('click',function () {
            let tmp = {
                    id: (this.id).match(/\d+/i)[0]
                },
                newText:string,
                request:any,
                $content = $('.type08__main__content');

            request = $.ajax({
                url: (window.location.protocol + '//' + window.location.host + '/wp-content/themes/quantify/ajax/loadDictionaryRecord.php'),
                type: 'post',
                data: tmp
            });
            request
                .done(function (response:any, textStatus:any, jqXHR:any){
                    newText = response;
                    $content.text(newText);
                })
                .fail(function (jqXHR:any, textStatus:any, errorThrown:any){
                    console.error(
                        "The following error occurred: "+
                        textStatus, errorThrown
                    );
                })
        })
    }
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
});
