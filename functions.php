<?php function add_supports(){
    add_theme_support('post-thumbnails');
//    register_nav_menus();
}
add_action('after_setup_theme' , 'add_supports');

function resources(){
    wp_enqueue_style( 'style', get_template_directory_uri().'/style.css' );
}

function register_jquery() {
	if (!is_admin() && $GLOBALS['pagenow'] != 'wp-login.php') {
		wp_deregister_script('jquery');
		wp_register_script('jquery','https://code.jquery.com/jquery-3.1.0.min.js', false, '3.1.0');
		wp_enqueue_script('jquery');
	}
}

add_action( 'init', 'register_jquery' );
add_action( 'wp_enqueue_scripts', 'resources' );
