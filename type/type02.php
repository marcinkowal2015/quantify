<?php
$type2_query = new WP_Query();
$type2_children_query = $type2_query->query(array(
    'post_type' => 'page' ,
    'post_parent' => $post->ID
));
$type2_page_children = array_reverse(get_page_children( $post->ID, $type2_children_query )); ?>
<div class="type2">
    <div class="type2-container"> <?php
        foreach ($type2_page_children as $type2_page) {
            $type2_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($type2_page->ID), 'full')[0];?>
            <div class="image-container">
                <div style="background-image: url(<?php echo $type2_image_url ?>);" class="post-background-image">
                    <div class="image-container__excerpt">
                        <div class="image-container__excerpt__content">
                            <div class="image-container__excerpt__text"><?php echo get_the_excerpt($type2_page) ?></div>
<!--                            <div class="image-container__excerpt__more"><a href="--><?php //the_permalink($type2_page) ?><!--">Dowiedz się więcej >></a></div>-->
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="image-container__page-title"><?php echo get_the_title($type2_page); ?></div>

                </div>
                <a href="<?php echo $type2_page->guid ?>" class="covering-link"></a>
            </div>
        <?php } ?>
    </div>
</div>
