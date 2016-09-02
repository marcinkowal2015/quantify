<div class="type08">
    <div class="type08__main">
        <div class="type08__main__image">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="type08__main__content">
            <?php the_content() ?>
        </div>
        <div class="type08__main__list" >
            <?php
            $args = array(
                'post_type' => 'haslo_slownika',
                'post_status' => 'publish',
                'orderby' => 'title',
                'order'   => 'ASC',
            );
            $media_query = null;
            $media_query = new WP_Query($args); ?>
            <?php if( $media_query->have_posts()){
                while($media_query->have_posts()): $media_query->the_post(); ?>
                    <?php
                    $record_associations = '';
                    if( have_rows('powiazane_uslugi') ):

                        while ( have_rows('powiazane_uslugi') ) : the_row();

                            $record_associations .= ' post-parent-' . get_sub_field('usluga')->ID;

                        endwhile;

                    else:

                        $record_associations .= 'no-association';

                    endif;
                    ?>

                    <div class="filter__item <?php echo $record_associations ?>">
                        <span class="dynamic-content" id="post-id-<?php echo $post->ID ?>"><?php the_title()?></span>
                    </div>

                <?php endwhile;
            }
            wp_reset_query();?>
        </div>
    </div>
    <div class="type08__side">
        <div class="filter">
            <div class="filter__title">
                <?php _e('Filtruj hasła' , 'quantify') ?>
            </div>
            <?php
            $oferta = get_post(188);
            $children = get_pages(array(
                'parent' => $oferta->ID,
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
                <div class="filter__input__item" data-value="0" >
                    <span><?php _e('Wszystkie hasła' , 'quantify') ?></span>
                </div>
                <?php foreach ($grandchildren as $item){ ?>
                    <div  class="filter__input__item"  data-value="<?php echo $item->ID ?>"><span><?php echo $item->post_title ?></span></div>
                <?php } ?>
            </div>
        </div>
    </div>
</div>