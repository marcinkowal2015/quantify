</section>
<?php wp_reset_query(); ?>
<?php if ( !is_home()  ) { ?>
    <footer>
        <div class="footer-wrap">
            <?php $top_ancestor_id = 0;
            $wp_query = new WP_Query();
            $direct_page_children = $wp_query->query(array(
                'post_type' => 'page',
                'post_parent' => $top_ancestor_id,
                'order' => 'desc',
                'orderby' => 'menu_order',
            ));
            $top_ancestor_children = array_reverse(get_page_children( $top_ancestor_id, $direct_page_children ));
            for ($i = 0 ; $i < 3; $i++ ){?>
                <div class="footer-menu-wrap">
                    <?php if ( isset( $top_ancestor_children[$i]) ){
                        $direct_page_children = $wp_query->query(array(
                            'post_type' => 'page' ,
                            'post_parent' => $top_ancestor_children[$i]->ID,
                        ));
                        $grand_children = array_reverse(get_page_children( $top_ancestor_children[$i]->ID, $direct_page_children )); ?>
                        <a href="<?php echo get_permalink($top_ancestor_children[$i]->ID) ?>"><?php echo $top_ancestor_children[$i]->post_title ?></a>
                        <ul>
                        <?php foreach ( $grand_children as $grand_child) {;?>
                            <li>
                                <a href="<?php echo get_permalink($grand_child->ID) ?>"><?php echo $grand_child->post_title ?></a>
                            </li>
                        <?php } ?>
                        </ul>
                    <?php } ?>
                </div>
            <?php } ?>
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

<div class="cookies-disclaimer" style="display: none">
    <div class="cookies-disclaimer__container">
        <div class="cookies-disclaimer__text__container">
            <div class="cookies-disclaimer__text">
                <?php _e('Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.' , 'quantify') ?>
            </div>
        </div>
        <div class="cookies-disclaimer__button">
            <div class="cookies-disclaimer__button__label">
                <?php _e('Rozumiem i akceptuję' , 'quantify') ?>
            </div>
        </div>
    </div>
</div>

<?php wp_footer(); ?>

</body>

</html>