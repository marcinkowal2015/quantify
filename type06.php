<div class="geographical-coverage">
    <?php
    $args = array(
        'category_name' => 'zasieg-geograficzny',
        'post_status' => 'publish'
    );
    $media_query = null;
    $media_query = new WP_Query($args); ?>
    <div class="geographical-coverage__map">
        <?php if( $media_query->have_posts()){
            while($media_query->have_posts()): $media_query->the_post(); ?>
                <?php the_post_thumbnail() ?>
            <?php endwhile;
        } ?>
    </div>
    <?php $media_query = new WP_Query($args);  ?>
    <div class="geographical-coverage__tabs">
        <div class="geographical-coverage__tabs__side-border"></div>
        <div class="geographical-coverage__tabs__container">
            <?php if( $media_query->have_posts()){
                while($media_query->have_posts()): $media_query->the_post(); ?>
                    <span class="geographical-coverage__tabs__item"><?php the_title() ?></span>
                <?php endwhile;
            } ?>
            <div class="geographical-coverage__tabs__container__side-border"></div>
        </div>
        <div class="geographical-coverage__tabs__side-border"></div>
    </div>
    <?php $media_query = new WP_Query($args);  ?>
    <div class="geographical-coverage__tab-content">
        <?php if( $media_query->have_posts()){
            while($media_query->have_posts()): $media_query->the_post(); ?>
                <div class="geographical-coverage__tab-content__item"><?php echo get_the_content() ?></div>
            <?php endwhile;
        } ?>
    </div>
</div>
<?php wp_reset_query();?>