<?php function add_supports(){
    add_theme_support('post-thumbnails');
//    register_nav_menus();
}
add_action('after_setup_theme' , 'add_supports');

function resources(){
    wp_enqueue_style( 'style', get_template_directory_uri().'/style.css' );
}
add_action( 'wp_enqueue_scripts', 'resources' );