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
                <ul class="header__main-menu">
                    <li class="header__main-menu__item">item</li>
                    <li class="header__main-menu__item">item</li>
                    <li class="header__main-menu__item">item</li>
                    <li class="header__main-menu__item">item</li>
                </ul>
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
    <div class="navigation">
        <div class="navigation__bar">
            <div class="navigation__bar__list">
                <div class="navigation__bar__list__title">title</div>
                <ul>
                    <li>aaa</li>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>

            <div class="navigation__bar__list">
                <div class="navigation__bar__list__title">title</div>
                <ul>
                    <li>aaa</li>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>

            <div class="navigation__bar__list">
                <div class="navigation__bar__list__title">title</div>
                <ul>
                    <li>aaa</li>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
        </div>
    </div>
</header>
