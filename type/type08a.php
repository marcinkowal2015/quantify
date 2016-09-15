<div class="type08">
    <div class="type08__main">
        <div class="type08__main__image">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="type08__main__content">
            <?php the_content() ?>
        </div>
        <div class="type08__main__list" >
            <?php $args = array(
                'category_name' => 'type09',
                'post_status' => 'publish',
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
                        <h3>
                            <a href="<?php echo get_permalink($post->ID) ?>"><?php echo get_the_title($post->ID)?></a>
                        </h3>
                        <span>
                            <?php echo get_the_excerpt($post->ID) ?>
                        </span>
                    </div>
                    <?php
                endwhile;
            }
            wp_reset_query();
            wp_reset_postdata();?>
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
                'sort_column' => 'menu_order'
            ));
            $grandchildren = [];
            foreach ($children as $item){
                $tmp = get_pages(array(
                    'parent' => $item->ID,
                    'sort_column' => 'menu_order'
                ));
                $grandchildren = array_merge($grandchildren , $tmp );
            }?>
            <div class="filter__input">

                <!--Dropdown select filter -->

<!--                <form id="filter-form">-->
<!--                    <select id="dictionary" title="" >-->
<!--                        <option value="0">--><?php //_e('Wszystkie artykuły' , 'quantify') ?><!--</option>-->
<!--                        --><?php //foreach ($grandchildren as $item){ ?>
<!--                            <option value="--><?php //echo $item->ID ?><!--">--><?php //echo $item->post_title ?><!--</option>-->
<!--                        --><?php //} ?>
<!--                    </select>-->
<!--                </form>-->

                <!--/Dropdown select filter-->
                <!--Div select filter-->

                <div class="filter__input__item" data-value="0" >
                    <span><?php _e('Wszystkie artykuły' , 'quantify') ?></span>
                </div>
                <?php foreach ($grandchildren as $item){ ?>
                    <div  class="filter__input__item"  data-value="<?php echo $item->ID ?>"><span><?php echo $item->post_title ?></span></div>
                <?php } ?>

                <!--/Div select filter-->

            </div>

        </div>
    </div>
</div>