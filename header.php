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
    <div class="header__bar">
        <img src="<?php echo get_template_directory_uri()?>/img/logo.png">
        <div class="header__navigation">
            <div>
                <span>aaa</span>
                <span>aaa</span>
                <span>aaa</span>
                <span>aaa</span>
            </div>
            <div class="header__language">
                <span class="header__language__pl">pl</span>
                <span>en</span>
            </div>
        </div>
    </div>

</header>
