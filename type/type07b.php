<div class="type07">
    <div class="type07__main">
        <div class="type07__main__image">
            <?php the_post_thumbnail() ?>
        </div>
        <div class="type07__main__business-type">
            <div class="type07__main__business-type__title active">
                <div class="underline-animation"></div>
                    <?php if(get_field('b2b_etykieta') ) {
                        echo get_field('b2b_etykieta');
                    } else {
                        _e('B2B' , 'quantify');
                    }?>
                </div>
            <div class="type07__main__business-type__title">
                <div class="underline-animation"></div>
                <?php if(get_field('b2c_etykieta') ) {
                    echo get_field('b2c_etykieta');
                } else {
                    _e('B2C' , 'quantify');
                }?>
            </div>
        </div>
        <div class="type07__main__content">
            <div class="type07__main__content__item active"><?php echo get_field('b2b') ?></div>
            <div class="type07__main__content__item"><?php echo get_field('b2c') ?></div>
        </div>
    </div>
    <div class="type07__side">
        <?php get_template_part('siblings-menu') ?>
        <div class="learn-more">
            <div class="learn-more__title">
                <?php _e('Dowiedz się więcej' , 'quantify') ?>
            </div>
            <div class="learn-more__link">
                <?php $dictionary = get_post(343);?>
                <a href="<?php echo get_permalink($dictionary->ID)?>"><?php _e('Słownik badawczy' , 'quantify') ?></a> » <a href="<?php echo get_permalink($dictionary->ID) . '?title=' . $post->post_title ?>"><?php the_title()?></a>
            </div>
            <div class="learn-more__link">
                <?php $article = get_post(346);  ?>
                <a href="<?php echo get_permalink($article->ID)?>"><?php _e('Artykuły' , 'quantify') ?></a> » <a href="<?php echo get_permalink($article->ID) . '?title=' . $post->post_title ?>"><?php the_title()?></a>
            </div>
        </div>
        <div class="contact-form">
            <div class="contact-form__title">
                <?php _e('Szybki kontakt' , 'quantify') ?>
            </div>
            <?php if ( is_active_sidebar( 'side_bar' ) ) : ?>
                <?php dynamic_sidebar( 'side_bar' ); ?>
            <?php endif; ?>
        </div>
    </div>
</div>