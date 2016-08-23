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
                Filtruj hasła
            </div>
            <?php
            $oferta = get_post(188);
            $children = get_pages(array(
                'parent' => $oferta->ID,
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
                        <option value="0">Wszystkie hasła</option>
                        <?php foreach ($grandchildren as $item){ ?>
                            <option value="<?php echo $item->ID ?>"><?php echo $item->post_title ?></option>
                        <?php } ?>
                    </select>
                </form>
            </div>
            <?php
            $args = array(
                'post_type' => 'haslo_slownika',
                'post_status' => 'publish'
            );
            $media_query = null;
            $media_query = new WP_Query($args); ?>
            <?php if( $media_query->have_posts()){
                while($media_query->have_posts()): $media_query->the_post(); ?>
                    <?php $record_association = get_field('usluga') ?>
                    <div class="filter__item post-parent-<?php echo $record_association->ID ?>"">
                        <span class="dynamic-content" id="post-id-<?php echo $post->ID ?>"><?php the_title()?></span>
                    </div>
                <?php endwhile;
            }
            wp_reset_query();?>
        </div>
    </div>
</div>