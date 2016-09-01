<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php if(is_home()) { ?>

    <section class="pre-loader">
        <div class="circle pulse-animation first-item"></div>
        <div class="circle pulse-animation second-item"></div>
        <div class="circle pulse-animation third-item"></div>
    </section>

<?php } ?>

<header>
    <div class="fixed-top">

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
                        ?>
                        <div class="header__main-menu">
                            <?php foreach ($menu_items as $item){ ?>
                                <span class="header__main-menu__item" id="main-menu-item-<?php echo $item->ID ?>">
                                <a href="<?php echo $item->guid ?>"><?php echo $item->post_title ?></a>
                            </span>
                            <?php } ?>
                        </div>
                        <div class="header__divider">
                            |
                        </div>
                        <div class="header__language">

                            <?php qtranxf_generateLanguageSelectCode(array(
                                'type' => 'custom',
                                'format' => '%c'
                            )) ?>
                        </div>
                    </div>
                    <div class="header__burger-menu">
                        <img src="<?php echo get_template_directory_uri()?>/img/burger-menu.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-menu closed">
            <?php foreach ($menu_items as $item){ ?>
                <span class="mobile-menu__item" id="main-menu-item-<?php echo $item->ID ?>">
                        <a href="<?php echo $item->guid ?>"><?php echo $item->post_title ?></a>
                    <?php if ( get_pages(array( 'child_of' => $item->ID )) && $item->ID != 195) { ?>
                        <img src="<?php echo get_template_directory_uri()?>/img/arrow-down.png">
                    <?php } ?>
                    </span>
            <?php } ?>
        </div>

        <div class="subpages_container" >
            <?php foreach ($menu_items as $page) {
                $wp_query = new WP_Query();
                $direct_page_children = $wp_query->query(array(
                    'post_type' => 'page' ,
                    'post_parent' => $page->ID
                ));
                if( $page->ID == 195 ){
                    $page_children = [];
                } else {
                    $page_children = array_reverse(get_page_children( $page->ID, $direct_page_children ));
                }
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
                                //Check if is geographical coverage
                                $category_nicename = get_the_category($child_page->ID)[0]->category_nicename;
                                if($category_nicename == 'type06'){
                                    $geographical_reach = get_posts(array(
                                        'category_name' => 'zasieg-geograficzny'
                                    ));
                                    $direct_child_children = array_merge($direct_child_children , $geographical_reach);
                                };
                                //----------
                                $direct_child_children = array_reverse($direct_child_children);
                                ?>


                                <div class="navigation__bar__list">
                                    <div class="navigation__bar__list__title"><a href="<?php echo $child_page->guid ?>"><?php echo $child_page->post_title ?></a></div>
                                    <ul>
                                        <?php foreach ($direct_child_children as $grandchildren){
                                            $grandchildren_page = get_page_by_title($grandchildren->post_title);?>
                                            <?php if($category_nicename == 'type06') {?>
                                                <li><a href="<?php echo $child_page->guid . '&title=' . $grandchildren->post_title  ?>"><?php echo $grandchildren->post_title ?></a></li>
                                            <?php }  else {?>
                                                <li><a href="<?php echo $grandchildren_page->guid  ?>"><?php echo $grandchildren->post_title ?></a></li>
                                            <?php }
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

    </div>

    <?php wp_reset_query();
    if( !is_home() ) { ?>
        <div class="breadcrumb">
            <div class="breadcrumb__bar">
                <a href="<?php echo get_home_url() ?>"><span><?php _e('Strona Główna' , 'quantify') ?></span></a>
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
