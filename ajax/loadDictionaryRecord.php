<?php

require_once($_SERVER['DOCUMENT_ROOT'] . 'wp-load.php');

$ID = $_POST['id'] ;
$the_query = new WP_Query( array(
    'p' => $ID,
    'post_type' => 'any'
));
$content = 'nie działa';
if($the_query->have_posts()){
    $the_query->the_post();
    $content = get_the_content();
}
//wp_reset_postdata();
echo $content;