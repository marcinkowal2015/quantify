<?php get_header(); ?>

<?php $category_objc =  get_the_category()[0];
get_template_part('type/'.$category_objc->slug);
?>

<?php get_footer(); ?>