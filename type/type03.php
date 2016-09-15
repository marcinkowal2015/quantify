<div class="type3">
    <div class="type3__container">
        <div class="type3__content">
            <?php $type3_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full')[0];?>
            <div class="type3__image-container">
                <img class="type3__featured-image" src="<?php echo $type3_image_url ?>">
            </div>
            <div class="type3__content__text">
                <?php echo apply_filters('the_content' , get_post()->post_content) ?>
            </div>
        </div>
        <div class="type3__navigation">
            <?php get_template_part('siblings-menu') ?>
        </div>
    </div>
</div>