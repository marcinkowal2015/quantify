<?php get_header(); ?>

<?php console_log( get_the_category() ) ?>
<?php $category_objc =  get_the_category()[0];
console_log($category_objc);
if ( $category_objc->slug == 'type-02'){
    get_template_part('type02');
} else if ( $category_objc->slug == 'type-03' ){
    get_template_part('type03');
} else if ( $category_objc->slug == 'type-04') {
    get_template_part('type04');
} else if ($category_objc->slug == 'type-05'){
    get_template_part('type05');
} else if ( $category_objc->slug == 'type-06' ){
    get_template_part('type06');
}
    ?>

<?php get_footer(); ?>