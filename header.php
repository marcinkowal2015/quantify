<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
    <div class="header">
        <div class="header__bar">
            <img src="<?php echo get_template_directory_uri()?>/img/logo.png">
            <div class="header__navigation">
                <?php
                $menu_items = get_pages(array(
                    'parent' => 0
                ));
                custom_menu_listing(array(
                    'menu_items' => $menu_items,
                    'menu_container' => 'div',
                    'menu_attr' => 'class="header__main-menu"',
                    'element_container' => 'span',
                    'element_attr' => 'class="header__main-menu__item"',
                    'element_id_prefix' => 'main-menu-item',
                    'add_link' => true,
                ));
                ?>
                <div class="header__divider">
                    |
                </div>
                <div class="header__language">
                    <span class="header__language__pl">pl</span>
                    <span>en</span>
                </div>
            </div>
        </div>
    </div>
    <?php foreach ($menu_items as $page) {
        $wp_query = new WP_Query();
        $direct_page_children = $wp_query->query(array(
            'post_type' => 'page' ,
            'post_parent' => $page->ID
        ));
        $page_children = array_reverse(get_page_children( $page->ID, $direct_page_children ));
        if ($page_children){
            ?>
            <div class="subpages_container" id="<?php echo "main-menu-item-".$page->ID."_content" ?>">
                <div class="navigation">
                    <div class="navigation__bar">
                        <?php foreach ($page_children as $child){
                            $child_page = get_page_by_title($child->post_title);
                            $direct_child_children = $wp_query->query(array(
                                'post_type' => 'page' ,
                                'post_parent' => $child_page->ID
                            ));
                            $child_page_children = array_reverse(get_page_children( $child_page->ID, $direct_child_children ));
                            ?>


                            <div class="navigation__bar__list">
                                <div class="navigation__bar__list__title"><a href="<?php echo $child_page->guid ?>"><?php echo $child_page->post_title ?></a></div>
                                <ul>
                                    <?php foreach ($child_page_children as $grandchildren){
                                        $grandchildren_page = get_page_by_title($child->post_title);?>

                                        <li><a href="<?php echo $grandchildren_page->guid ?>"><?php echo $grandchildren->post_title ?></a></li>
                                        <?php
                                    } ?>
                                </ul>
                            </div>
                            <?php
                        } ?>

                    </div>
                </div>
            </div>
            <?php
        }

    }
    wp_reset_query();?>
</header>
<section class="body-content">
