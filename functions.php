<?php function add_supports(){

    //Add thumbnails support
    add_theme_support('post-thumbnails');

    //Add navigation menus
//    register_nav_menus(array(
//        'header_nav'    => __('Menu glowne'),
//        'footer_1'      => __('Footer Menu 1'),
//        'footer_2'      => __('Footer Menu 2'),
//        'footer_3'      => __('Footer Menu 3'),
//    ));

}
add_action('after_setup_theme' , 'add_supports');

function resources(){
    wp_enqueue_style( 'style', get_template_directory_uri().'/style.css' );
	wp_enqueue_script('main', get_template_directory_uri().'/js/bundle.js', array(), false, true);

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

/**
 * Register a custom menu page.
 */
/** Step 2 (from text above). */
add_action( 'admin_menu', 'my_plugin_menu' );

/** Step 1. */
function my_plugin_menu() {
    add_menu_page( 'Ustawienia głównego slidera', 'Główny slider', 'manage_options', 'quantify_main_slider', 'slider_options_display' , null , 6 );
}

/** Step 3. */
function slider_options_display() {
    if ( !current_user_can( 'manage_options' ) )  {
        wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
    }
    echo '<div class="wrap">';
    echo '<h1>Ustawienia głównego slidera</h1>';
    echo '<p>Here is where the form would go if I actually had options.</p>';
    echo '</div>';
}

/**********************************************************
 * Custom functions
 */
/**
 * Generate custom menu listing
 * Options:
 * menu_items           - mandatory     ; slug of registered menu location
 * menu_container       - default: ''   ; container in which enclose whole menu
 * menu_attr            - default: ''   ; menu container attributes, ignored if menu_container is not defined
 * element_container    - default: ''   ; container in which enclose each element
 * element_siblings     - default: ''   ; additional elements after element in element container
 * element_attr         - default: ''   ; element container attributes, ignored if menu_container is not defined
 * element_id_prefix    - default: ''   ; prefix for indexing elements, if not defined elements are not indexed
 * add_link             - default: true ; enclose title in <a> tag and link it to source
 */
function custom_menu_listing($options){
    if ( isset( $options['menu_items'] ) ) {
        $menu_items = $options['menu_items'];
        $add_link = isset($options['add_link']) ? $options['add_link'] : true ;
        $menu_attr = isset($options['menu_attr']) ? $options['menu_attr'] : '' ;
        $before_menu = isset($options['menu_container']) ? '<' . $options['menu_container'] . ' ' . $menu_attr . '>' : '' ;
        $after_menu = isset($options['menu_container']) ? '</' . $options['menu_container'] . '>' : '' ;
        $element_attr = isset($options['element_attr']) ? $options['element_attr'] : '' ;
        $closing = isset($options['element_container']) ? '>' : '';
        $after_element = isset( $options['element_container'] ) ? '</' . $options['element_container'] . '>' : '';
        $element_siblings = isset($options['element_siblings']) ? $options['element_siblings'] : '';

        $menu_list = isset( $options['menu_container'] ) ? $before_menu : '';
        foreach ( (array) $menu_items as $key => $menu_item ) {
            $active = ( get_top_ancestor_id() == $menu_item->ID ) ? 'style="text-decoration:underline;"' : '';
            $before_element = isset($options['element_container']) ? '<' . $options['element_container'] . ' ' . $element_attr .' ' . $active : '' ;
            $title = $menu_item->post_title;
            $url = $menu_item->guid;
            $id = isset($options['element_id_prefix']) ? 'id="' . $options['element_id_prefix'] . '-' . $menu_item->ID . '""': '';
            $element = ($add_link) ?  '<a href="' . $url . '">' . $title . '</a>': $title;
            $menu_list .= $before_element . $id . $closing . $element . $element_siblings .$after_element;
        }
        $menu_list .= isset( $options['menu_container'] ) ? $after_menu : '';
        echo $menu_list;
    } else {
        echo '<span>Menu not found</span>';
    }

}

/**
 * Get top ancestor
 */
function get_top_ancestor_id(){

    global $post;

    if( $post->post_parent ){
        $ancestors = array_reverse(get_post_ancestors($post->ID));
        return $ancestors[0];
    }
    return $post->ID;
}

/**
 * Get page by ID
 */
function get_page_by_ID($args){

}

/**
 * Debug function
 */
function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
}


