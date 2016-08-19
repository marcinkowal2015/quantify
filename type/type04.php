
<?php
$args = array(
    'post_type' => 'employee',
    'post_status' => 'publish',
);
wp_reset_query();
$media_query = null;
$media_query = new WP_Query($args);
if ($media_query->have_posts()){
    while( $media_query->have_posts()) : $media_query->the_post(); ?>
        <div class="employee">
            <div class="employee__container">
                <div class="employee__image">
                    <?php the_post_thumbnail() ?>
                </div>
                <div class="employee__description">
                    <div class="employee__description__name">
                        <h2><?php the_title() ?></h2>
                    </div>
                    <div class="employee__description__job">
                        <?php echo get_field('stanowisko') ?>
                    </div>
                    <div class="employee__description__content">
                        <?php the_content() ?>
                    </div>
                </div>
                <div class="employee__separator"></div>
            </div>
            <div class="employee__reference">
                <div class="employee__reference__content">
                    <?php echo get_field('referencja_pracownika') ?>
                </div>
                <div class="employee__reference__author">
                    <div class="employee__reference__author__description-container">
                        <div class="employee__reference__author__name">
                            <?php echo get_field('autor_referencji') ?>
                        </div>
                        <div class="employee__reference__author__job">
                            <?php echo get_field('stanowisko_autora') ?>
                        </div>
                    </div>
                    <div class="employee__reference__author__image">
                        <?php $image = get_field('zdjęcie_autora_referencji');
                        if( !empty($image) ) { ?>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>

    <?php endwhile;
}
wp_reset_query();
?>