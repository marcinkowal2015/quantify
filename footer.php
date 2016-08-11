</section>
<?php if (!is_front_page()) { ?>
    <footer>
        <div class="footer-wrap">
            <div class="footer-menu-wrap">
                <?php ?>

            </div>
            <div class="footer-menu-wrap">
                <?php ?>

            </div>
            <div class="footer-menu-wrap">
                <?php ?>

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
<?php } ?>
<?php wp_footer(); ?>
</body>

</html>