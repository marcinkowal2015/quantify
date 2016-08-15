<?php
$type2_query = new WP_Query();
$type2_children_query = $type2_query->query(array(
    'post_type' => 'page' ,
    'post_parent' => $post->ID
));
$type2_page_children = array_reverse(get_page_children( $post->ID, $type2_children_query ));
console_log($type2_page_children); ?>

<div class="type2">
<div class="type2-container"> <?php
foreach ($type2_page_children as $type2_page) {
    $type2_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($type2_page->ID), 'full')[0]; ?>
    <div class="image-container">
    <div style="background-image: url(<?php echo $type2_image_url ?>);" class="post-background-image">
        asdasd
    </div>
    </div>
<?php } ?>
<div>
</div>
