$(document).ready(()=> {
   let $input = $('#filter'),
       $items = $('.filter__item'),
       items:string[] = [];

   $('#filter-form').submit(e =>{
      search();
      e.preventDefault();
      return false;
   });
   $items.each(function () {
      items.push(this.innerText.toLocaleLowerCase());
   });

   if( $input[0]){
      $input.keyup(() =>{
         search();
      });
   }
   function search(){
      let inputText:string = $input.val().toLowerCase();
      $items
          .removeAttr('style');
      items
          .forEach( (el,index) => {
             if( el.indexOf(inputText) < 0) {
                $($items[index]).css({
                   display: 'none'
                })
             }
          });
   }
   //// "Słownik badawczy"
   let $select:any = $('#dictionary'),
       $options:any = $select.find('option'),
       $visible = $items,
       $dynamicContent = $('.dynamic-content');
   // $items will be used here as well

   if($select[0]){
      $select
          .selectize({
             create: false,
             sortField: 'text',
             placeholder: 'Wszystkie hasła'
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


      $dynamicContent.on('click',function () {
         let tmp = {
                id: (this.id).match(/\d+/i)[0]
             },
             newText:string,
             request:any,
             $content = $('.type08__main__content');

         request = $.ajax({
            url: (window.location.protocol + '//' + window.location.host + '/quantify/wp-content/themes/quantify/ajax/loadDictionaryRecord.php'),
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
});