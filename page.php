<?php get_header(); ?>

<?php console_log( get_the_category() ) ?>
<?php $category_objc =  get_the_category()[0];
console_log($category_objc);
if ( $category_objc->slug == 'type-02'){
    get_template_part('type02');
}?>

<?php get_footer(); ?>