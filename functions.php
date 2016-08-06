<?php function add_supports(){

    //Add thumbnails support
    add_theme_support('post-thumbnails');

    //Add navigation menus
    register_nav_menus(array(
        'header_nav'    => __('Menu glowne'),
        'footer_1'      => __('Footer Menu 1'),
        'footer_2'      => __('Footer Menu 2'),
        'footer_3'      => __('Footer Menu 3'),
    ));

}
add_action('after_setup_theme' , 'add_supports');

function resources(){
    wp_enqueue_style( 'style', get_template_directory_uri().'/style.css' );
}
add_action( 'wp_enqueue_scripts', 'resources' );

function register_jquery() {
	if (!is_admin() && $GLOBALS['pagenow'] != 'wp-login.php') {
		wp_deregister_script('jquery');
		wp_register_script('jquery','https://code.jquery.com/jquery-3.1.0.min.js', false, '3.1.0');
		wp_enqueue_script('jquery');
	}
}
add_action( 'init', 'register_jquery' );

/**
 * Register our sidebars and widgetized areas.
 *
 */
function arphabet_widgets_init() {

    register_sidebar( array(
        'name'          => 'Footer dane kontaktowe',
        'id'            => 'footer_column_4',
        'before_widget' => '<div class="contact-form">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="title">',
        'after_title'   => '</h2>',
    ) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

/**********************************************************
 * Custom functions
 */

/**
 * Generate custom menu listing
 * Options:
 * theme_location   - mandatory     ; slug of registered menu location
 * before_list      - default: ''   ; html to inject before whole menu
 * after_list       - default: ''   ; html to inject after whole menu
 * before_element   - default: ''   ; html to inject before each menu element
 * after_element    - default: ''   ; html to inject after each menu element
 * add_link         - default: true ; enclose title in <a> tag and link it to source
 */
function create_custom_menu_listing($options){
    $menu_items = '';
    $add_link = isset($options['add_link']) ;
    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[$options['theme_location']] ) ) {
        $menu = wp_get_nav_menu_object( $locations[$options['theme_location']] );
        $menu_items = wp_get_nav_menu_items($menu->term_id);
    }
    $menu_list = isset( $options['before_list'] ) ? $options['before_list'] : '';
    $before_element = isset( $options['before_element'] ) ? $options['before_element'] : '';
    $after_element = isset( $options['after_element'] ) ? $options['after_element'] : '';
    foreach ( (array) $menu_items as $key => $menu_item ) {
        $title = $menu_item->title;
        $url = $menu_item->url;
        $element = ($add_link) ?  '<a href="' . $url . '">' . $title . '</a>' : $title;
            $menu_list .= $before_element . $element .$after_element;
    }
    $menu_list .= isset( $options['after_list'] ) ? $options['after_list'] : '';
    echo $menu_list;
}

//

/**
 * Debug function
 */
function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
}


