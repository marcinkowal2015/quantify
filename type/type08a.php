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
                Filtruj artykuły
            </div>
            <div class="filter__input">
                <form id="filter-form">
                    <input id="filter" type="text" title="" placeholder="Wszystkie artykuły">
                </form>
            </div>
            <?php $children = get_pages(array(
                'child_of' => $post->ID
            ));
            if($children){
                foreach ($children as $item){?>
                    <div class="filter__item <?php echo ($item->ID == $post->ID) ? 'active' : '' ?>">
                        <a href="<?php echo $item->guid ?>"><?php echo get_the_title($item->ID)?></a>
                    </div>
                <?php }
            }?>
        </div>
    </div>
</div>