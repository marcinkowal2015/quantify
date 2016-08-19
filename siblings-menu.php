<div class="siblings-menu">
    <div class="siblings-menu__parent">
        <a href="<?php echo get_permalink($post->post_parent) ?>"><?php echo get_the_title($post->post_parent);?></a>
    </div>
    <?php
    wp_reset_query();
    $siblings = get_pages(array(
        'post_type' => 'page' ,
        'child_of' => $post->post_parent
    ));
    if($siblings){
        foreach ($siblings as $item){?>
            <div class="siblings-menu__siblings <?php echo ($item->ID == $post->ID) ? 'active' : '' ?>">
                <a href="<?php echo $item->guid ?>"><?php echo get_the_title($item->ID)?></a>
            </div>
        <?php }
    }
    wp_reset_query();
    wp_reset_postdata();
    ?>
</div>