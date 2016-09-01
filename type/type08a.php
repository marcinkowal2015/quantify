<div class="type08">
    <div class="type08__main">
        <div class="type08__main__image">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="type08__main__content">
            <?php the_content() ?>
        </div>
    </div>
    <div class="type08__side">
        <div class="filter">
            <div class="filter__title">
                <?php _e('Filtruj artykuły' , 'quantify') ?>
            </div>
            <?php
            $offer = get_post(188); // offer page ID
            $children = get_pages(array(
                'parent' => $offer->ID,
            ));
            $grandchildren = [];
            foreach ($children as $item){
                $tmp = get_pages(array(
                    'parent' => $item->ID,
                ));
                $grandchildren = array_merge($grandchildren , $tmp );
            }?>
            <div class="filter__input">
                <form id="filter-form">
                    <select id="dictionary" title="" >
                        <option value="0"><?php _e('Wszystkie artykuły' , 'quantify') ?></option>
                        <?php foreach ($grandchildren as $item){ ?>
                            <option value="<?php echo $item->ID ?>"><?php echo $item->post_title ?></option>
                        <?php } ?>
                    </select>
                </form>
            </div>
            <?php $args = array(
                'category_name' => 'type09',
                'post_status' => 'publish'
            );
            $media_query = null;
            $media_query = new WP_Query($args);

            if( $media_query->have_posts()){
                while($media_query->have_posts()): $media_query->the_post();
                    $record_associations = '' ?>
                    <?php

                    if( have_rows('powiazane_uslugi') ):

                        // loop through the rows of data
                        while ( have_rows('powiazane_uslugi') ) : the_row();
//                            console_log($post);
//                            console_log(get_sub_field('usluga'));

                            // display a sub field value
                            $record_associations .= ' post-parent-' . get_sub_field('usluga')->ID;

                        endwhile;

                    else:

                        $record_associations .= 'no-association';

                    endif;

                    ?>
                    <div class="filter__item <?php echo $record_associations ?>">
                        <a href="<?php echo $post->guid ?>"><?php echo get_the_title($post->ID)?></a>
                    </div>
                    <?php
                endwhile;
            }
            wp_reset_query();
            wp_reset_postdata();?>
        </div>
    </div>
</div>