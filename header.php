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
        <div class="header__container">
            <div class="header__bar">
                <a href="<?php bloginfo('url') ?>"><img src="<?php echo get_template_directory_uri()?>/img/logo.png"></a>
                <div class="header__navigation">
                    <?php
                    $menu_items = get_pages(array(
                        'parent' => 0,
                        'sort_order' => 'asc',
                        'sort_column' => 'menu_order',
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
                        <span class="header__language__item"><a href="<?php bloginfo('url') ?>">pl</a></span>
                        <span class="header__language__item">en</span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="subpages_container" >
        <?php foreach ($menu_items as $page) {
            $wp_query = new WP_Query();
            $direct_page_children = $wp_query->query(array(
                'post_type' => 'page' ,
                'post_parent' => $page->ID
            ));
            $page_children = array_reverse(get_page_children( $page->ID, $direct_page_children ));
            if ($page_children){
                ?>
                <div class="navigation" id="<?php echo "main-menu-item-".$page->ID."_content" ?>">
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
                                        $grandchildren_page = get_page_by_title($grandchildren->post_title);?>

                                        <li><a href="<?php echo $grandchildren_page->guid ?>"><?php echo $grandchildren->post_title ?></a></li>
                                        <?php
                                    } ?>
                                </ul>
                            </div>
                            <?php
                        } ?>

                    </div>
                </div>

                <?php
            }

        } ?>
    </div>

    <?php wp_reset_query();
    if( !is_home() ) { ?>
        <div class="breadcrumb">
            <div class="breadcrumb__bar">
                <a href="<?php echo get_home_url() ?>"><span>Strona Główna</span></a>
                <?php $current_page = get_post();
                $page_path = array( $current_page );
                $tmp = $current_page;
                while( $tmp->post_parent != 0){
                    $tmp =  get_post( $tmp->post_parent);
                    array_push( $page_path , $tmp);
                }
                $page_path = array_reverse($page_path);
                foreach ($page_path as $item ) {?>
                    <a <?php if ($item != $current_page){ ?> href="<?php echo $item->guid ;?>" <?php } else {
                        echo 'class="active"';
                    } ?>><span class="breadcrumb__bar__item"><?php echo $item->post_title; ?></span></a>
                <?php } ?>
            </div>
        </div>
        <div class="page-title">
            <div class="page-title__container">
                <h1>
                    <?php the_title(); ?>
                </h1>
            </div>
        </div>
    <?php }?>
</header>
<section class="body-content">
