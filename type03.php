<div class="type3">
    <div class="type3-container">
        <div class="type3-content">
            <?php $type3_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full')[0];?>
            <div class="type3-image-container">
                <img class="type3-featured-image" src="<?php echo $type3_image_url ?>">
            </div>
            <div>
                <?php echo get_post()->post_content; ?>
            </div>
        </div>
        <div class="type3-navigation">
            Navigation here
        </div>
    </div>
</div>