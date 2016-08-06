<footer>
    <div class="footer-wrap">
        <div class="footer-menu-wrap">
            <?php

            $args = array(
                'theme_location' => 'footer_1'
            );

            wp_nav_menu($args) ?>

        </div>
        <div class="footer-menu-wrap">
            <?php

            $args = array(
                'theme_location' => 'footer_2'
            );

            wp_nav_menu($args) ?>

        </div>
        <div class="footer-menu-wrap">
            <?php

            $args = array(
                'theme_location' => 'footer_2'
            );

            wp_nav_menu($args) ?>

        </div>
        <div class="footer-menu-wrap">
            <?php if ( is_active_sidebar( 'footer_column_4' ) ) : ?>
                <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
                    <?php dynamic_sidebar( 'footer_column_4' ); ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>