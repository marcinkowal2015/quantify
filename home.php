<?php get_header() ?>

<div class="carousel__container">
    <?php $args=array(
        'post_type' => 'slajd',
        'post_status' => 'publish',
    );

    $my_query = null;
    $my_query = new WP_Query($args);
    if( $my_query->have_posts() ) {
        while ($my_query->have_posts()) : $my_query->the_post(); ?>
            <div class="carousel__image-item">
                <?php the_post_thumbnail() ?>
            </div>
            <?php
        endwhile;
    }
    wp_reset_query();?>
</div>
<div class="content">
    <div class="content__carousel__container">
        <div class="content__carousel__container__background"></div>
        <div class="content__carousel">
            <?php
            $my_query = null;
            $my_query = new WP_Query($args);
            if( $my_query->have_posts() ) {
                while ($my_query->have_posts()) : $my_query->the_post(); ?>
                    <div class="content__carousel__item">
                        <h2><?php the_title() ?></h2>
                        <?php the_content() ?>
                    </div>
                    <?php
                endwhile;
            }
            wp_reset_query();?>
        </div>
    </div>
    <div class="content__read-more">
        <div class="content__read-more__background"></div>

        <div class="content__read-more__link">
            <?php
            $my_query = null;
            $my_query = new WP_Query($args);
            if( $my_query->have_posts() ) {
            while ($my_query->have_posts()) : $my_query->the_post(); ?>
                <?php $permalink = ( get_field('read-more-link') ) ? get_field('read-more-link') : $permalink ?>
                <span><?php echo $permalink ?></span>
            <?php endwhile;
            } ?>
            <a id="read-more">Dowiedz się więcej</a>
        </div>
    </div>
</div>

<?php get_footer() ?>
