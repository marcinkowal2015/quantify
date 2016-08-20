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
    wp_register_script('selectize' , 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.1/js/standalone/selectize.js');
    wp_enqueue_script('selectize');
    wp_register_style('selectize.css' , 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.2/css/selectize.min.css');
    wp_enqueue_style('selectize.css');
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
            'supports' => array( 'title', 'editor', 'thumbnail' , 'page-attributes' )
        )
    );
    register_post_type( 'employee',
        array(
            'labels' => array(
                'name' => __( 'Pracownicy' ),
                'singular_name' => __( 'Pracownik' )
            ),
            'public' => true,
            'has_archive' => true,
            'menu_position' => 5,
            'supports' => array( 'title', 'editor', 'thumbnail' , 'page-attributes' )
        )
    );
    register_post_type( 'haslo_slownika',
        array(
            'labels' => array(
                'name' => __( 'Hasła słownika' ),
                'singular_name' => __( 'Hasło słownika' )
            ),
            'public' => true,
            'has_archive' => true,
            'menu_position' => 5,
            'capability_type' => 'post',
            'supports' => array( 'title', 'editor' , 'page-attributes' )
        )
    );
}
add_action('init' , 'create_post_type');

/**
 * Advanced Custom Fields
 */
if(function_exists("register_field_group"))
{
    register_field_group(array (
        'id' => 'acf_artykuly',
        'title' => 'Artykuły',
        'fields' => array (
            array (
                'key' => 'field_57b58d19460be',
                'label' => 'Autor',
                'name' => 'autor',
                'type' => 'post_object',
                'post_type' => array (
                    0 => 'employee',
                ),
                'taxonomy' => array (
                    0 => 'all',
                ),
                'allow_null' => 0,
                'multiple' => 0,
            ),
        ),
        'location' => array (
            array (
                array (
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                    'order_no' => 0,
                    'group_no' => 0,
                ),
            ),
        ),
        'options' => array (
            'position' => 'normal',
            'layout' => 'no_box',
            'hide_on_screen' => array (
            ),
        ),
        'menu_order' => 0,
    ));
    register_field_group(array (
        'id' => 'acf_czytaj-wiecej',
        'title' => 'Czytaj więcej...',
        'fields' => array (
            array (
                'key' => 'field_57b3f8733f9e1',
                'label' => 'Czytaj więcej...',
                'name' => 'read-more-link',
                'type' => 'page_link',
                'instructions' => 'Wprowadź link do którego użytkownik zostanie przekierowany po kliknięciu " Dowiedz się więcej" na stronie głównej. ',
                'post_type' => array (
                    0 => 'all',
                ),
                'allow_null' => 0,
                'multiple' => 0,
            ),
        ),
        'location' => array (
            array (
                array (
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'slajd',
                    'order_no' => 0,
                    'group_no' => 0,
                ),
            ),
        ),
        'options' => array (
            'position' => 'normal',
            'layout' => 'no_box',
            'hide_on_screen' => array (
            ),
        ),
        'menu_order' => 0,
    ));
    register_field_group(array (
        'id' => 'acf_hasla-slownika',
        'title' => 'Hasła słownika',
        'fields' => array (
            array (
                'key' => 'field_57b6ae8a4845e',
                'label' => 'Usługa',
                'name' => 'usluga',
                'type' => 'post_object',
                'instructions' => 'Link do strony usługi, której dotyczy hasło ',
                'post_type' => array (
                    0 => 'page',
                ),
                'taxonomy' => array (
                    0 => 'all',
                ),
                'allow_null' => 0,
                'multiple' => 0,
            ),
        ),
        'location' => array (
            array (
                array (
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'haslo_slownika',
                    'order_no' => 0,
                    'group_no' => 0,
                ),
            ),
        ),
        'options' => array (
            'position' => 'normal',
            'layout' => 'no_box',
            'hide_on_screen' => array (
            ),
        ),
        'menu_order' => 0,
    ));
    register_field_group(array (
        'id' => 'acf_pracownicy',
        'title' => 'Pracownicy',
        'fields' => array (
            array (
                'key' => 'field_57b42adf93aa9',
                'label' => 'Stanowisko',
                'name' => 'stanowisko',
                'type' => 'text',
                'instructions' => 'Stanowisko pracownika',
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'html',
                'maxlength' => '',
            ),
            array (
                'key' => 'field_57b42b0ff9845',
                'label' => 'Referencja pracownika',
                'name' => 'referencja_pracownika',
                'type' => 'textarea',
                'instructions' => 'Komentarz zewnętrznej osoby na temat pracownika',
                'default_value' => '',
                'placeholder' => '',
                'maxlength' => '',
                'rows' => '',
                'formatting' => 'br',
            ),
            array (
                'key' => 'field_57b42b51f9846',
                'label' => 'Autor referencji',
                'name' => 'autor_referencji',
                'type' => 'text',
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'html',
                'maxlength' => '',
            ),
            array (
                'key' => 'field_57b42b8ff9847',
                'label' => 'Stanowisko autora',
                'name' => 'stanowisko_autora',
                'type' => 'text',
                'instructions' => 'Stanowisko autora referencji pracownika',
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'formatting' => 'html',
                'maxlength' => '',
            ),
            array (
                'key' => 'field_57b42badf9848',
                'label' => 'Zdjęcie autora referencji',
                'name' => 'zdjęcie_autora_referencji',
                'type' => 'image',
                'save_format' => 'object',
                'preview_size' => 'thumbnail',
                'library' => 'all',
            ),
        ),
        'location' => array (
            array (
                array (
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'employee',
                    'order_no' => 0,
                    'group_no' => 0,
                ),
            ),
        ),
        'options' => array (
            'position' => 'normal',
            'layout' => 'no_box',
            'hide_on_screen' => array (
            ),
        ),
        'menu_order' => 0,
    ));
    register_field_group(array (
        'id' => 'acf_uslugi',
        'title' => 'Usługi',
        'fields' => array (
            array (
                'key' => 'field_57b487a98fd7a',
                'label' => 'B2B',
                'name' => 'b2b',
                'type' => 'wysiwyg',
                'default_value' => '',
                'toolbar' => 'full',
                'media_upload' => 'yes',
            ),
            array (
                'key' => 'field_57b489ab6a280',
                'label' => 'B2C',
                'name' => 'b2c',
                'type' => 'wysiwyg',
                'default_value' => '',
                'toolbar' => 'full',
                'media_upload' => 'yes',
            ),
            array (
                'key' => 'field_57b5498005f5c',
                'label' => 'Słownik badawczy',
                'name' => 'slownik_badawczy',
                'type' => 'post_object',
                'instructions' => 'Link do odpowiedniej usługi w słowniku badawczym',
                'post_type' => array (
                    0 => 'page',
                ),
                'taxonomy' => array (
                    0 => 'all',
                ),
                'allow_null' => 0,
                'multiple' => 0,
            ),
            array (
                'key' => 'field_57b549b705f5d',
                'label' => 'Artykuł',
                'name' => 'artykul',
                'type' => 'post_object',
                'instructions' => 'Link do odpowiedniego artykułu o usłudze',
                'post_type' => array (
                    0 => 'page',
                ),
                'taxonomy' => array (
                    0 => 'all',
                ),
                'allow_null' => 0,
                'multiple' => 0,
            ),
        ),
        'location' => array (
            array (
                array (
                    'param' => 'post_category',
                    'operator' => '==',
                    'value' => '13',
                    'order_no' => 0,
                    'group_no' => 0,
                ),
            ),
        ),
        'options' => array (
            'position' => 'normal',
            'layout' => 'no_box',
            'hide_on_screen' => array (
                0 => 'the_content',
            ),
        ),
        'menu_order' => 0,
    ));
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


