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

function register_cdn(){
    wp_register_script('slick.js' , 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js');
    wp_enqueue_script('slick.js');
    wp_register_style('slick.css' , 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
    wp_enqueue_style('slick.css');
    wp_register_style('slick-theme.css' , 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
    wp_enqueue_style('slick-theme.css');
}
add_action('wp_enqueue_scripts' , 'register_cdn');


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
 * Register slide post
 */

function create_post_type() {
    register_post_type( 'slajd',
        array(
            'labels' => array(
                'name' => __( 'Slajdy' ),
                'singular_name' => __( 'Slajd' )
            ),
            'public' => true,
            'has_archive' => true,
            'menu_position' => 5,
            'supports' => array( 'title', 'editor', 'thumbnail' )
        )
    );
}
add_action('init' , 'create_post_type');

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

add_post_type_support( 'page', 'excerpt' );

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


