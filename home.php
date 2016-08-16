<?php get_header() ?>

<div class="carousel-container">
    <?php $args=array(
        'post_type' => 'slajd',
        'post_status' => 'publish',
    );

    $my_query = null;
    $my_query = new WP_Query($args);
    if( $my_query->have_posts() ) {
        while ($my_query->have_posts()) : $my_query->the_post(); ?>
            <div class="carousel-image-item">
                <?php the_post_thumbnail() ?>
            </div>
            <?php
        endwhile;
    }
    wp_reset_query();?>
</div>
<div class="content-carousel-container">
    <div class="content-carousel">
        <?php
        $my_query = null;
        $my_query = new WP_Query($args);
        if( $my_query->have_posts() ) {
            while ($my_query->have_posts()) : $my_query->the_post(); ?>
                <div class="content-carousel-item">
                    <h2><?php the_title() ?></h2>
                    <?php the_content() ?>
                </div>
                <?php
            endwhile;
        }
        wp_reset_query();?>
    </div>
</div>

<?php get_footer() ?>
