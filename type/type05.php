<div class="assets">
    <?php
    $args = array(
        'category_name' => 'zasoby-badawcze',
        'post_status' => 'publish'
    );
    wp_reset_query();
    $media_query = null;
    $media_query = new WP_Query($args);
    if ($media_query->have_posts()){
        while($media_query->have_posts()): $media_query->the_post(); ?>
            <div class="assets__item">
                <div class="assets__item__image">
                    <?php the_post_thumbnail() ?>
                    <div class="assets__item__title">
                        <h2><?php the_title() ?></h2>
                    </div>
                </div>
                <div class="assets__item__content">
                    <?php echo get_the_content() ?>
                </div>
            </div>
        <?php endwhile;
    }
    wp_reset_query();?>
</div>